import test from 'ava';
import Twig from 'twig';
import state from '../../lib/config/twig.js';
import { addDrupalExtensions } from '#twig';

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

export const renderWithConfigMacro = test.macro(async (t, options) => {
  const originalBaseUrl = state.baseUrl;
  const originalSchemePath =
    state.streamWrapper[options.schemeName ? options.schemeName : 'public://'];

  // Ensure the config is reverted for other tests.
  t.teardown(() => {
    if (options.baseUrl) {
      state.baseUrl = originalBaseUrl;
    }
    if (options.schemeName) {
      state.streamWrapper[options.schemeName] = originalSchemePath;
    }
  });

  let testCount = 1;
  if (options.baseUrl) {
    testCount += 2;
  }
  if (options.schemeName) {
    testCount += 2;
  }
  t.plan(testCount);

  // Confirm that the original config is different.
  if (options.baseUrl) {
    t.not(state.baseUrl, options.baseUrl);
  }
  if (options.schemeName) {
    t.not(state.streamWrapper[options.schemeName], options.schemePath);
  }

  // Add config.
  const config = {};
  if (options.baseUrl) {
    config.base_url = options.baseUrl;
  }
  if (options.schemeName) {
    config.streamWrapper = {
      [options.schemeName]: options.schemePath,
    };
  }
  addDrupalExtensions(Twig, config);

  // Ensure our baseUrl has a trailing slash.
  if (options.baseUrl && options.baseUrl.slice(-1) !== '/') {
    options.baseUrl += '/';
  }

  // Confirm that the config was added to the state.
  if (options.baseUrl) {
    t.deepEqual(state.baseUrl, options.baseUrl);
  }
  if (options.schemeName) {
    t.deepEqual(state.streamWrapper[options.schemeName], options.schemePath);
  }

  // Confirm the config affects rendering.
  await renderTemplateMacro.exec(t, {
    template: options.template,
    data: options.data,
    expected: options.expected,
  });
});
