import test from 'ava';
import Twig from 'twig';
import state from '../../../lib/config/twig.js';
import { addDrupalExtensions } from '#twig';
import { setupTwigBefore, renderTemplateMacro } from '#twig-fixture';

test.before(setupTwigBefore);

test.serial('should render with no arguments', renderTemplateMacro, {
  template: 'The path to my theme is {{ active_theme_path() }}!',
  expected: 'The path to my theme is core/themes/stark!',
});

test.serial('should render while ignoring arguments', renderTemplateMacro, {
  template:
    'The path to my theme is {{ active_theme_path("ignored argument") }}!',
  expected: 'The path to my theme is core/themes/stark!',
});

const activeThemePathMacro = test.macro(async (t, options) => {
  const activeTheme = options.config.activeTheme;
  const activeThemePath = options.config.activeThemePath;
  const originalTheme = state.activeTheme;
  const originalThemePath = state.activeThemePath;

  // Ensure the config is reverted for other tests.
  t.teardown(() => {
    state.activeTheme = originalTheme;
    if (originalThemePath) {
      state.activeThemePath = originalThemePath;
    } else {
      delete state.activeThemePath;
    }
  });

  let totalAssertions = 1;
  if (activeTheme) {
    totalAssertions += 2;
  }
  if (activeThemePath) {
    totalAssertions += 2;
  }
  t.plan(totalAssertions);

  // Confirm that the original config is different.
  if (activeTheme) {
    t.not(state.activeTheme, activeTheme);
  }
  if (activeThemePath) {
    t.not(state.activeThemePath, activeThemePath);
  }

  addDrupalExtensions(Twig, options.config);

  // Confirm that the config was added to the state.
  if (activeTheme) {
    t.deepEqual(state.activeTheme, activeTheme);
  }
  if (activeThemePath) {
    t.deepEqual(state.activeThemePath, activeThemePath);
  }

  // Confirm the config affects rendering.
  await renderTemplateMacro.exec(t, {
    template: '{{ active_theme_path() }}',
    expected: options.expected,
  });
});

test.serial(
  'should recognize a core theme added from active_theme config',
  activeThemePathMacro,
  {
    config: {
      active_theme: 'bartik',
    },
    expected: 'core/themes/bartik',
  },
);

test.serial(
  'should recognize the umami theme added from active_theme config',
  activeThemePathMacro,
  {
    config: {
      active_theme: 'umami',
    },
    expected: 'core/profiles/demo_umami/themes/umami',
  },
);

test.serial(
  'should use a custom theme added from active_theme config',
  activeThemePathMacro,
  {
    config: {
      active_theme: 'myCustom',
    },
    expected: 'themes/custom/myCustom',
  },
);

test.serial(
  'should use the theme path added from active_theme_path config',
  activeThemePathMacro,
  {
    config: {
      active_theme: 'zen',
      active_theme_path: 'themes/contrib/zen',
    },
    expected: 'themes/contrib/zen',
  },
);
