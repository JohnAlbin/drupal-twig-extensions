import test from 'ava';
import date from 'locutus/php/datetime/date.js';
import { setupTwigBefore, renderTemplateMacro } from '#twig-fixture';

test.before(setupTwigBefore);

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
