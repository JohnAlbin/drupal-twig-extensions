/**
 * @file The active_theme function
 *
 * Docs for TwigExtension::getActiveTheme (Drupal 9.3.x):
 *
 * ```
 * new TwigFunction('active_theme', [$this, 'getActiveTheme'])
 * ```
 */

export const name = 'active_theme';

export const options = {};

export const acceptedArguments = [];

/**
 * Gets the name of the active theme.
 *
 * @param {Object<string, ?string|Object<string, ?string>>} config
 *   The shared Drupal config.
 *
 * @returns {string}
 *   The name of the active theme.
 */
export function activeTheme(config) {
  return config.activeTheme;
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
  // The default active theme in the Drupal minimal install profile.
  state.activeTheme = 'stark';

  if (Object.prototype.hasOwnProperty.call(config, 'active_theme')) {
    state.activeTheme = config.active_theme;
  }
}
