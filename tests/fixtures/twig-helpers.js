import test from 'ava';
import Twig from 'twig';
import { addDrupalExtensions } from '../../lib/twig.js';

export const setupTwigBefore = (t) => {
  t.context.twig = Twig.twig;

  // Add the extensions for Drupal.
  addDrupalExtensions(Twig);
};

export const renderTemplateMacro = test.macro(async (t, options) => {
  const compiledTemplate = await t.context.twig({
    data: options.template,
  });

  let actual = await compiledTemplate.render(options.data || {});

  t.is(actual, options.expected);
});
