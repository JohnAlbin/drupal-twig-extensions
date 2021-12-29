/**
 * @file The drupal_escape filter
 *
 * Docs for TwigExtension::escapeFilter (Drupal 9.3.x):
 *
 * ```
 * new TwigFilter('drupal_escape',
 *   [$this, 'escapeFilter'],
 *   [
 *     'needs_environment' => TRUE,
 *     'is_safe_callback' => 'twig_escape_filter_is_safe'
 *   ]
 * )
 * ```
 *
 * ```
 * Overrides twig_escape_filter().
 *
 * Replacement function for Twig's escape filter.
 *
 * Note: This function should be kept in sync with
 * theme_render_and_autoescape().
 *
 * @param \Twig\Environment $env
 *   A Twig Environment instance.
 * @param mixed $arg
 *   The value to be escaped.
 * @param string $strategy
 *   The escaping strategy. Defaults to 'html'.
 * @param string $charset
 *   The charset.
 * @param bool $autoescape
 *   Whether the function is called by the auto-escaping feature (TRUE) or by
 *   the developer (FALSE).
 *
 * @return string|null
 *   The escaped, rendered output, or NULL if there is no valid output.
 * ```
 */

export const name = 'drupal_escape';

export const options = {
  // PHP Twig option
  needs_environment: true,
  // Twing option
  needs_template: true,
  // @TODO Fix this.
  // Drupal defines this function with the is_safe_callback option set to
  // Twig\Extension\EscaperExtension::twig_escape_filter_is_safe.
  // We use the is_safe option instead:
  is_safe: ['html'],
};

export const acceptedArguments = [
  { name: 'strategy', defaultValue: 'html' },
  { name: 'charset', defaultValue: null },
];
