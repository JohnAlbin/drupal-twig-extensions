/**
 * @file The attach_library function
 *
 * Docs for TwigExtension::attachLibrary (Drupal 9.3.x):
 *
 * ```
 * new TwigFunction('attach_library', [$this, 'attachLibrary'])
 * ```
 *
 * ```
 * Attaches an asset library to the template, and hence to the response.
 *
 * Allows Twig templates to attach asset libraries using
 * @code
 * {{ attach_library('extension/library_name') }}
 * @endcode
 *
 * @param string $library
 *   An asset library.
 * ```
 */

export const name = 'attach_library';

export const options = {};

export const acceptedArguments = [{ name: 'library' }];
