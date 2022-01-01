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

/**
 * Creates a root-relative web-accessible URL string.
 *
 * @param {Object<string, ?string|Object<string, ?string>>} config
 *   The shared Drupal config.
 * @param {string} uri
 *   The URI to a file for which we need an external URL, or the path to a
 *   shipped file.
 *
 * @returns {string}
 *   For a local URL (matching domain), a root-relative string containing a
 *   URL that may be used to access the file. An absolute URL may be returned
 *   when using a CDN or a remote stream wrapper.
 *
 * @throws \Drupal\Core\File\Exception\InvalidStreamWrapperException
 *   If a stream wrapper could not be found to generate an external URL.
 */
export function fileUrl(config, uri) {
  // Non-strings are cast to a string with Drupal's file_url.
  const path = `${uri}`;

  // This regex matches against uri schemes (e.g. 'public://', 'https://'). It
  // is copied from \Drupal\Core\StreamWrapper\StreamWrapperManager::getScheme()
  const scheme = /^([\w-]+):\/\//;

  // If the uri includes a streamWrapper scheme, replace it.
  if (
    scheme.test(path) &&
    Object.keys(config.streamWrapper).includes(path.match(scheme)[0])
  ) {
    return `${config.baseUrl}${path.replace(
      scheme,
      (substring) => config.streamWrapper[substring] + '/',
    )}`;
  }

  // Allow for:
  // - root-relative URIs (e.g. /foo.jpg in http://example.com/foo.jpg)
  // - protocol-relative URIs (e.g. //bar.jpg, which is expanded to
  //   http://example.com/bar.jpg by the browser when viewing a page over
  //   HTTP and to https://example.com/bar.jpg when viewing a HTTPS page)
  // Both types of relative URIs are characterized by a leading slash, hence
  // we can use a single check.
  if (path.slice(0, 1) === '/') {
    return path;
  }

  // TODO: Add escaping of path, query and fragment.
  // If this is not a properly formatted stream, then it is a shipped
  // file. Therefore, return the urlencoded URI with the base URL
  // prepended.
  // $options = UrlHelper::parse($uri);
  // $path = $base_url . UrlHelper::encodePath($options['path']);
  // // Append the query.
  // if ($options['query']) {
  //   $path .= '?' . UrlHelper::buildQuery($options['query']);
  // }
  //
  // // Append fragment.
  // if ($options['fragment']) {
  //   $path .= '#' . $options['fragment'];
  // }

  return path;
}

/**
 * Initializes the Drupal base_url and streamWrapper config.
 *
 * @param {Object<string, ?string|Object<string, ?string>>} state
 *   The shared configuration state object.
 * @param {Object<string, ?string|Object<string, ?string>>} config
 *   The Drupal config to save.
 */
export function configInit(state, config) {
  // The default Drupal base_url.
  state.baseUrl = '/';
  // The default Drupal streamWrapper paths.
  state.streamWrapper = {
    'public://': 'sites/default/files',
    'private://': 'sites/default/private',
    'temporary://': 'sites/default/tmp',
  };

  if (Object.prototype.hasOwnProperty.call(config, 'base_url')) {
    state.baseUrl = config.base_url;
    if (state.baseUrl.slice(-1) !== '/') {
      state.baseUrl += '/';
    }
  }

  if (Object.prototype.hasOwnProperty.call(config, 'streamWrapper')) {
    // Merge the given streamWrapper with the defaults.
    state.streamWrapper = {
      ...state.streamWrapper,
      ...config.streamWrapper,
    };
  }
}
