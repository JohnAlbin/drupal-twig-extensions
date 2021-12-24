import test from 'ava';
import { setupTwingBefore, renderTemplateMacro } from '#twing-fixture';

test.before(setupTwingBefore);

const template = '{{ "a string"|t }}';

test(
  'should return the same string until the t filter is implemented',
  renderTemplateMacro,
  {
    template,
    data: {},
    expected: 'a string',
  },
);
