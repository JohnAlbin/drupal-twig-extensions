import test from 'ava';
import date from 'locutus/php/datetime/date.js';
import { TwingEnvironment, TwingLoaderRelativeFilesystem } from 'twing';
import state from '#config';
import { addDrupalExtensions } from '#twing';
import { setupTwingBefore, renderTemplateMacro } from '#twing-fixture';

test.before(setupTwingBefore);

const data = {
  date: new Date(Date.UTC(2002, 5, 29, 10, 0, 0)),
};

test('should use the "medium" date type by default', renderTemplateMacro, {
  template: `{{ date|format_date }}`,
  data,
  expected: date('D, m/d/Y - H:i', data.date),
});

test('should use the given date type', renderTemplateMacro, {
  template: `{{ date|format_date("long") }}`,
  data,
  expected: date('l, F j, Y - H:i', data.date),
});

test(
  'should use the "Fallback date format" if the given date type is not found',
  renderTemplateMacro,
  {
    template: `{{ date|format_date("notfound") }}`,
    data,
    expected: date('D, m/d/Y - H:i', data.date),
  },
);

const format = 'Y-m-d H:i:s T';
test('should use the given custom format', renderTemplateMacro, {
  template: `{{ date|format_date("custom", format) }}`,
  data: {
    ...data,
    format,
  },
  expected: date(format, data.date),
});

test('should use a format added from config', async (t) => {
  t.plan(4);

  const specialFormat = '\\F\\r\\o\\m \\c\\o\\n\\f\\i\\g: Y-m-d';
  const originalFormats = state.dateFormats;

  // Create an instance of the Twing Environment.
  const twingEnvironment = new TwingEnvironment(
    new TwingLoaderRelativeFilesystem(),
    { autoescape: false },
  );

  // Ensure the config doesn't originally exist.
  t.deepEqual(state.dateFormats.special, undefined);

  addDrupalExtensions(twingEnvironment, {
    date_format: {
      special: specialFormat,
    },
  });

  // Confirm that the config was added to the state.
  t.deepEqual(state.dateFormats.special, specialFormat);

  // Confirm the config affects rendering.
  const compiledTemplate = await twingEnvironment.createTemplate(
    '{{ date|format_date("special") }}',
  );
  let actual = await compiledTemplate.render(data);
  t.is(actual, 'From config: 2002-06-29');

  // Ensure the config was removed for other tests.
  state.dateFormats = originalFormats;
  t.deepEqual(state.dateFormats.special, undefined);
});
