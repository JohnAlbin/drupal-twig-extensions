import test from 'ava';
import { setupTwingBefore, renderTemplateMacro } from '#twing-fixture';

test.before(setupTwingBefore);

const template = '{{ "a string"|trans }}';

test(
  'should return the same string until the trans filter is implemented',
  renderTemplateMacro,
  {
    template,
    data: {},
    expected: 'a string',
  },
);
