import test from 'ava';
import { setupTwingBefore, renderTemplateMacro } from '#twing-fixture';

test.before(setupTwingBefore);

const template = '{{ array|render }}';

test(
  'should return an empty string given an empty array',
  renderTemplateMacro,
  {
    template,
    data: {
      array: [],
    },
    expected: '',
  },
);

test('should return an empty string given an array', renderTemplateMacro, {
  template,
  data: {
    array: ['string1', 'string2'],
  },
  expected: '',
});
