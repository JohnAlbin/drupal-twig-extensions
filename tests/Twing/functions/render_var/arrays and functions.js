import test from 'ava';
import { setupTwingBefore, renderTemplateMacro } from '#twing-fixture';

test.before(setupTwingBefore);

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

// Twing throws a TwingErrorRuntime when trying to set the "array" variable to a
// function.
test.skip('should throw an error given a Function', async (t) => {
  const compiledTemplate = await t.context.twingEnvironment.createTemplate(
    template,
  );

  const data = {
    array: async () => 'function return value',
  };

  await t.throwsAsync(compiledTemplate.render(data), {
    message: 'A function cannot be printed.',
  });
});
