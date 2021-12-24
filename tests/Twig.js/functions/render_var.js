import test from 'ava';
import cloneDeep from 'lodash.clonedeep';
import { setupTwigBefore, renderTemplateMacro } from '#twig-fixture';

test.before(setupTwigBefore);

const template = '{{ render_var(array) }}';

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
  template: '{{ render_var(array)|keys|first }}',
  data,
  expected: '0',
});

test.failing('should convert a render array to a string', renderTemplateMacro, {
  template,
  data,
  expected: '<p>value1</p><p>value2</p>',
});

// Create an object with a custom toString method.
const custom = cloneDeep(data);
custom.toString = function () {
  return '<h2>Custom rendering:</h2>' + this.array.key1['#markup'];
};

test.failing(
  "should use the object's custom toString method if provided",
  renderTemplateMacro,
  {
    template,
    data: custom,
    expected: `${custom}`,
  },
);
