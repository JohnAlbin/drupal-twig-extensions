import test from 'ava';
import { TwingEnvironment, TwingLoaderRelativeFilesystem } from 'twing';
import state from '#config';
import { addDrupalExtensions } from '#twing';
import { setupTwingBefore, renderTemplateMacro } from '#twing-fixture';

test.before(setupTwingBefore);

test.serial('should render with no arguments', renderTemplateMacro, {
  template: 'This is the {{ active_theme() }} theme!',
  expected: 'This is the stark theme!',
});

test.serial('should render while ignoring arguments', renderTemplateMacro, {
  template: 'This is the {{ active_theme("ignored argument") }} theme!',
  expected: 'This is the stark theme!',
});

test.serial('should use the theme added from config', async (t) => {
  const activeTheme = 'myCustomTheme';
  const originalTheme = state.activeTheme;

  // Ensure the config is reverted for other tests.
  t.teardown(() => {
    state.activeTheme = originalTheme;
  });

  t.plan(3);

  // Create an instance of the Twing Environment.
  const twingEnvironment = new TwingEnvironment(
    new TwingLoaderRelativeFilesystem(),
    { autoescape: false },
  );

  // Confirm that the original config is different.
  t.not(state.activeTheme, activeTheme);

  addDrupalExtensions(twingEnvironment, {
    active_theme: activeTheme,
  });

  // Confirm that the config was added to the state.
  t.deepEqual(state.activeTheme, activeTheme);

  // Confirm the config affects rendering.
  await renderTemplateMacro.exec(t, {
    template: '{{ active_theme() }}',
    expected: activeTheme,
  });
});
