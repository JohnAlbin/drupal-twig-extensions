/**
 * @file The safe_join filter
 *
 * Docs for TwigExtension::safeJoin (Drupal 9.3.x):
 *
 * ```
 * new TwigFilter('safe_join',
 *   [$this, 'safeJoin'],
 *   [
 *     'needs_environment' => TRUE,
 *     'is_safe' => ['html']
 *   ]
 * )
 * ```
 *
 * ```
 * Joins several strings together safely.
 *
 * @param \Twig\Environment $env
 *   A Twig Environment instance.
 * @param mixed[]|\Traversable|null $value
 *   The pieces to join.
 * @param string $glue
 *   The delimiter with which to join the string. Defaults to an empty string.
 *   This value is expected to be safe for output and user provided data
 *   should never be used as a glue.
 *
 * @return string
 *   The strings joined together.
 * ```
 */

export const name = 'safe_join';

export const options = {
  needs_environment: true,
  is_safe: ['html'],
};

export const acceptedArguments = [{ name: 'glue', defaultValue: '' }];
