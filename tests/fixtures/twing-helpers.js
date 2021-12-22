import test from 'ava';
import { TwingEnvironment, TwingLoaderRelativeFilesystem } from 'twing';
import { addDrupalExtensions } from '../../twing.js';

export const setupTwingBefore = (t) => {
  // Create an instance of the Twing Environment.
  const twingEnvironment = new TwingEnvironment(
    new TwingLoaderRelativeFilesystem(),
    { autoescape: false },
  );

  // Add the extensions for Drupal.
  addDrupalExtensions(twingEnvironment);

  t.context.twingEnvironment = twingEnvironment;
};

export const renderTemplateMacro = test.macro(async (t, options) => {
  const compiledTemplate = await t.context.twingEnvironment.createTemplate(
    options.template,
  );

  let actual = await compiledTemplate.render(options.data || {});

  t.is(actual, options.expected);
});
