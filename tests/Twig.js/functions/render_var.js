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

test('should return an empty string given boolean false', renderTemplateMacro, {
  template,
  data: {
    array: false,
  },
  expected: '',
});

test('should return a "1" given boolean true', renderTemplateMacro, {
  template,
  data: {
    array: true,
  },
  expected: '1',
});

test('should return a string given a number', renderTemplateMacro, {
  template,
  data: {
    array: 0.25,
  },
  expected: '0.25',
});

test('should return a string given a BigInt', renderTemplateMacro, {
  template,
  data: {
    array: BigInt(1000000000),
  },
  expected: '1000000000',
});

test('should return the description given a Symbol', renderTemplateMacro, {
  template,
  data: {
    array: Symbol('the Symbol description'),
  },
  expected: 'the Symbol description',
});

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

test.skip('should throw an error given a Function', async (t) => {
  const compiledTemplate = await t.context.twig({
    data: template,
  });

  const data = {
    array: () => 'function return value',
  };

  t.throws(() => compiledTemplate.render(data), {
    message: 'A function cannot be printed.',
  });
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

test(
  "should use the object's custom toRenderable method if provided",
  renderTemplateMacro,
  {
    template,
    data: {
      array: {
        ...custom,
        toRenderable: function () {
          return 'to Renderable';
        },
        __toString: function () {
          return '__to String';
        },
      },
    },
    expected: 'to Renderable',
  },
);

test(
  "should use the object's custom __toString method if provided",
  renderTemplateMacro,
  {
    template,
    data: {
      array: {
        ...custom,
        __toString: function () {
          return '__to String';
        },
      },
    },
    expected: '__to String',
  },
);

test('should print the #markup of a pre-rendered array', renderTemplateMacro, {
  template,
  data: {
    array: {
      '#printed': true,
      '#markup': 'The #markup string',
    },
  },
  expected: 'The #markup string',
});

test.failing('should convert a render array to a string', renderTemplateMacro, {
  template,
  data,
  expected: '<p>value1</p><p>value2</p>',
});
