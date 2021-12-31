import test from 'ava';
import cloneDeep from 'lodash.clonedeep';
import { setupTwigBefore, renderTemplateMacro } from '#twig-fixture';

test.before(setupTwigBefore);

const template = '{{ array|render }}';

const data = {
  array: {
    key1: { '#markup': '<p>value1</p>' },
    key2: { '#markup': '<p>value2</p>' },
  },
};

test(
  'should return the default Object.toString until render() is implemented',
  renderTemplateMacro,
  {
    template,
    data,
    expected: '[object Object]',
  },
);

test('should return a string', renderTemplateMacro, {
  // The first key of a string is 0.
  template: '{{ array|render|keys|first }}',
  data,
  expected: '0',
});

test('should return an empty string given null', renderTemplateMacro, {
  template,
  data: {
    array: null,
  },
  expected: '',
});

test('should return an empty string given undefined', renderTemplateMacro, {
  template,
  data: {
    array: undefined,
  },
  expected: '',
});

test.failing('should convert a render array to a string', renderTemplateMacro, {
  template,
  data,
  expected: '<p>value1</p><p>value2</p>',
});

// Create an object with a custom toString method.
const custom = cloneDeep(data.array);
custom.toString = function () {
  return '<h2>Custom rendering:</h2>' + this.key1['#markup'];
};

test(
  "should use the object's custom toString method if provided",
  renderTemplateMacro,
  {
    template,
    data: {
      array: custom,
    },
    expected: custom.toString(),
  },
);
