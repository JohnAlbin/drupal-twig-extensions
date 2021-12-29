/**
 * @file The active_theme_path function
 *
 * Docs for TwigExtension::getActiveThemePath (Drupal 9.3.x):
 *
 * ```
 * new TwigFunction('active_theme_path', [$this, 'getActiveThemePath'])
 * ```
 */

export const name = 'active_theme_path';

export const options = {};

export const acceptedArguments = [];

/**
 * Gets the path of the active theme.
 *
 * @param {Object<string, ?string|Object<string, ?string>>} config
 *   The shared Drupal config.
 *
 * @returns {string}
 *   The path to the active theme.
 */
export function activeThemePath(config) {
  return config.activeThemePath;
}

/**
 * Initializes the Drupal active theme config.
 *
 * @param {Object<string, ?string|Object<string, ?string>>} state
 *   The shared configuration state object.
 * @param {Object<string, ?string|Object<string, ?string>>} config
 *   The Drupal config to save.
 */
export function configInit(state, config) {
  if (Object.prototype.hasOwnProperty.call(config, 'active_theme_path')) {
    state.activeThemePath = config.active_theme_path;
  } else {
    // If active_theme_path is not set, use active_theme to generate a path.
    switch (state.activeTheme) {
      // Drupal 9.3.x themes
      case 'bartik':
      case 'claro':
      case 'classy':
      case 'olivero':
      case 'seven':
      case 'stable':
      case 'stable9':
      case 'stark':
        state.activeThemePath = `core/themes/${state.activeTheme}`;
        break;
      case 'umami':
        state.activeThemePath = 'core/profiles/demo_umami/themes/umami';
        break;
      default:
        state.activeThemePath = `themes/custom/${state.activeTheme}`;
        break;
    }
  }
}
