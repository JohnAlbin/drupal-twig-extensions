import test from 'ava';
import date from 'locutus/php/datetime/date.js';
import { setupTwigBefore, renderTemplateMacro } from '#twig-fixture';

test.before(setupTwigBefore);

const format = 'Y-m-d H:i:s T';
const template = `{{ date|format_date("${format}") }}`;

const data = {
  date: new Date(Date.UTC(2002, 5, 29, 10, 0, 0)),
};

test('should format the given Date', renderTemplateMacro, {
  template,
  data,
  expected: date(format, data.date),
});
