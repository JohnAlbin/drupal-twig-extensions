/**
 * @file The path function
 *
 * Docs for TwigExtension::getPath (Drupal 9.3.x):
 *
 * ```
 * new TwigFunction('path',
 *   [$this, 'getPath'],
 *   [
 *     'is_safe_callback' => [$this, 'isUrlGenerationSafe']
 *   ]
 * )
 * ```
 *
 * ```
 * Generates a URL path given a route name and parameters.
 *
 * @param $name
 *   The name of the route.
 * @param array $parameters
 *   An associative array of route parameters names and values.
 * @param array $options
 *   (optional) An associative array of additional options. The 'absolute'
 *   option is forced to be FALSE.
 *
 * @return string
 *   The generated URL path (relative URL) for the given route.
 *
 * @see \Drupal\Core\Routing\UrlGeneratorInterface::generateFromRoute()
 * ```
 */

export const name = 'path';

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
