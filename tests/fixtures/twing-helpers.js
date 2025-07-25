import test from 'ava';
import { createArrayLoader, createEnvironment } from 'twing';
import state from '#config';
import { addDrupalExtensions } from '#twing';

export const setupTwingBefore = () => {};

export const renderTemplateMacro = test.macro(async (t, options) => {
  const templateName = 'inline_template';
  const loader = createArrayLoader({
    [templateName]: options.template,
  });
  const twingEnvironment = createEnvironment(loader, {
    autoescape: false,
  });

  addDrupalExtensions(twingEnvironment, options.config || {});
  // Confirm that the config was added to the state.
  if (options.config?.baseUrl) {
    t.not(state.baseUrl, options.config.baseUrl);
  }
  if (options.config?.schemeName && options.schemeName) {
    t.deepEqual(
      state.streamWrapper[options.schemeName],
      options.config.schemePath,
    );
  }
  const actual = await twingEnvironment.render(
    templateName,
    options.data || {},
  );

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
  t.not(options.baseUrl, 'system');
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

  // Ensure our baseUrl has a trailing slash.
  if (options.baseUrl && options.baseUrl.slice(-1) !== '/') {
    options.baseUrl += '/';
  }

  // Confirm the config affects rendering.
  await renderTemplateMacro.exec(t, {
    template: options.template,
    config: config,
    data: options.data,
    expected: options.expected,
  });
});
