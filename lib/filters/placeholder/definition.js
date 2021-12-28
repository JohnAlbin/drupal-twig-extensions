/**
 * @file The drupal_escape filter
 *
 * Docs for TwigExtension::escapeFilter (Drupal 9.3.x):
 *
 * ```
 * new TwigFilter('placeholder',
 *   [$this, 'escapePlaceholder'],
 *   [
 *     'is_safe' => ['html'],
 *     'needs_environment' => TRUE
 *   ]
 * )
 * ```
 *
 * ```
 * /**
 *  * Provides a placeholder wrapper around ::escapeFilter.
 *  *
 *  * @param \Twig\Environment $env
 *  *   A Twig Environment instance.
 *  * @param mixed $string
 *  *   The value to be escaped.
 *  *
 *  * @returns string|null
 *  *   The escaped, rendered output, or NULL if there is no valid output.
 *  *\/
 * public function escapePlaceholder(Environment $env, $string) {
 *   $return = $this->escapeFilter($env, $string);
 *
 *   return $return ? '<em class="placeholder">' . $return . '</em>' : NULL;
 * }
 * ```
 */

export const name = 'placeholder';

export const options = {
  is_safe: ['html'],
  // PHP Twig option
  needs_environment: true,
  // Twing option
  needs_template: true,
};

export const acceptedArguments = [];

/**
 * Helper used by the placeholder filters' callables.
 *
 * @param {(string|null)?} escapedValue
 * @returns {string|null}
 */
export function wrapPlaceholder(escapedValue) {
  return escapedValue ? `<em class="placeholder">${escapedValue}</em>` : null;
}
