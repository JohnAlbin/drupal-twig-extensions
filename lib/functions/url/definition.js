/**
 * @file The url function
 *
 * Docs for TwigExtension::getUrl (Drupal 9.3.x):
 *
 * ```
 * new TwigFunction('url',
 *   [$this, 'getUrl'],
 *   [
 *     'is_safe_callback' => [$this, 'isUrlGenerationSafe']
 *   ]
 * )
 * ```
 *
 * ```
 * Generates an absolute URL given a route name and parameters.
 *
 * @param $name
 *   The name of the route.
 * @param array $parameters
 *   An associative array of route parameter names and values.
 * @param array $options
 *   (optional) An associative array of additional options. The 'absolute'
 *   option is forced to be TRUE.
 *
 * @return array
 *   A render array with generated absolute URL for the given route.
 *
 * @todo Add an option for scheme-relative URLs.
 * ```
 */

export const name = 'url';

export const options = {
  // Drupal defines this function with the is_safe_callback option set to
  // Drupal\Core\Template\TwigExtension::isUrlGenerationSafe.
  // We use the is_safe option instead:
  is_safe: ['html'],
};

export const acceptedArguments = [
  { name: 'name' },
  { name: 'parameters', defaultValue: {} },
  { name: 'options', defaultValue: {} },
];
