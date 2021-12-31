import test from 'ava';
import { setupTwigBefore, renderTemplateMacro } from '#twig-fixture';

test.before(setupTwigBefore);

const template = '{{ render_var(array) }}';

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

// Twig.js sets the "array" variable to the return value of the function.
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
