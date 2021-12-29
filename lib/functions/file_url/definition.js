/**
 * @file The file_url function
 *
 * Docs for FileUrlGenerator::generateString (Drupal 9.3.x):
 *
 * ```
 * new TwigFunction('file_url', [$this->fileUrlGenerator, 'generateString'])
 * ```
 *
 * ```
 * Creates a root-relative web-accessible URL string.
 *
 * @param string $uri
 *   The URI to a file for which we need an external URL, or the path to a
 *   shipped file.
 *
 * @return string
 *   For a local URL (matching domain), a root-relative string containing a
 *   URL that may be used to access the file. An absolute URL may be returned
 *   when using a CDN or a remote stream wrapper.
 *
 * @throws \Drupal\Core\File\Exception\InvalidStreamWrapperException
 *   If a stream wrapper could not be found to generate an external URL.
 * ```
 */

export const name = 'file_url';

export const options = {};

export const acceptedArguments = [{ name: 'uri' }];
