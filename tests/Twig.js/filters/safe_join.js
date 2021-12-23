import test from 'ava';
import { setupTwigBefore, renderTemplateMacro } from '#twig-fixture';

test.before(setupTwigBefore);

const data = { array: ['string1', 'string2', 'string3'] };

test(
  'should join an array with no glue string by default',
  renderTemplateMacro,
  {
    template: '{{ array|safe_join }}',
    data,
    expected: 'string1string2string3',
  },
);

test('should join an array with the given glue string', renderTemplateMacro, {
  template: '{{ array|safe_join(", ") }}',
  data,
  expected: 'string1, string2, string3',
});

test('should join an object with the given glue string', renderTemplateMacro, {
  template: '{{ object|safe_join(", ") }}',
  data: {
    object: {
      key1: 'string1',
      key2: 'string2',
      key3: 'string3',
    },
  },
  expected: 'string1, string2, string3',
});
