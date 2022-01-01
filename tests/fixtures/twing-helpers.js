import test from 'ava';
import { TwingEnvironment, TwingLoaderRelativeFilesystem } from 'twing';
import state from '../../lib/config/twing.js';
import { addDrupalExtensions } from '#twing';

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
  const twingEnvironment =
    options.twingEnvironment ?? t.context.twingEnvironment;

  const compiledTemplate = await twingEnvironment.createTemplate(
    options.template,
  );

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

  // Create an instance of the Twing Environment.
  const twingEnvironment = new TwingEnvironment(
    new TwingLoaderRelativeFilesystem(),
    { autoescape: false },
  );

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
  addDrupalExtensions(twingEnvironment, config);

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
    twingEnvironment,
    template: options.template,
    data: options.data,
    expected: options.expected,
  });
});
