/**
 * @file The clean_class filter
 *
 * Docs for Html::getClass (Drupal 9.3.x):
 *
 * ```
 * new TwigFilter('clean_class', '\Drupal\Component\Utility\Html::getClass')
 * ```
 */

export const name = 'clean_class';

export const options = {};

export const acceptedArguments = [];

/**
 * Prepares a string for use as a valid class name.
 *
 * Do not pass one string containing multiple classes as they will be
 * incorrectly concatenated with dashes, i.e. "one two" will become "one-two".
 *
 * @param {Object<string, ?string|Object<string, ?string>>} config
 *   The shared Drupal config.
 * @param {*} string
 *   The class name to clean. It can be a string or anything that can be cast
 *   to string.
 *
 * @returns {string}
 *   The cleaned class name.
 *
 * @see \Drupal\Component\Utility\Html::getClass()
 */
export function cleanClass(config, string) {
  const identifier = String(string);

  if (
    !Object.prototype.hasOwnProperty.call(config.cleanClassCache, identifier)
  ) {
    config.cleanClassCache[identifier] = cleanCssIdentifier(
      identifier.toLowerCase(),
    );
  }

  return config.cleanClassCache[identifier];
}

/**
 * Prepares a string for use as a CSS identifier (element, class, or ID name).
 *
 * Link below shows the syntax for valid CSS identifiers (including element
 * names, classes, and IDs in selectors).
 *
 * @see http://www.w3.org/TR/CSS21/syndata.html#characters
 *
 * @param {string} identifier
 *   The identifier to clean.
 * @param {Object} [filter]
 *   An object of string replacements to use on the identifier.
 *
 * @returns {string}
 *   The cleaned identifier.
 *
 * @see \Drupal\Component\Utility\Html::cleanCssIdentifier()
 */
function cleanCssIdentifier(identifier, filter) {
  if (typeof filter === 'undefined') {
    filter = {
      ' ': '-',
      _: '-',
      '/': '-',
      '[': '-',
      ']': '',
    };
  }

  // In order to keep '__' to stay '__' we first replace it with a different
  // placeholder after checking that it is not defined as a filter.
  let doubleUnderscoreReplacements = 0;
  if (!Object.prototype.hasOwnProperty.call(filter, '__')) {
    identifier = identifier.replace(/__/g, function () {
      doubleUnderscoreReplacements += 1;
      return '##';
    });
  }

  identifier = identifier.replace(
    new RegExp(
      Object.keys(filter)
        .map(function (value) {
          return '(' + value.replace(/[\\?*+|.^${}[\]()]/g, '\\$&') + ')';
        })
        .join('|'),
      'g',
    ),
    function (substring) {
      return filter[substring];
    },
  );
  // Replace temporary placeholder '##' with '__' only if the original
  // identifier contained '__'.
  if (doubleUnderscoreReplacements > 0) {
    identifier = identifier.replace(/##/g, '__');
  }

  // Valid characters in a CSS identifier are:
  // - the hyphen (U+002D)
  // - a-z (U+0030 - U+0039)
  // - A-Z (U+0041 - U+005A)
  // - the underscore (U+005F)
  // - 0-9 (U+0061 - U+007A)
  // - ISO 10646 characters U+00A1 and higher
  // We strip out any character not in the above list.
  identifier = identifier.replace(
    /(?:[\0-,./:-@[-^`{-\u00A0]|[\uD800-\uDBFF][\uDC00-\uDFFF])/g,
    '',
  );
  // Identifiers cannot start with a digit, two hyphens, or a hyphen followed by a digit.
  // N.b.: This doesn't match the logic from core exactly, but the result is the same.
  identifier = identifier.replace(/^\d/g, '_').replace(/^(-\d)|^(--)/g, '__');
  return identifier;
}

/**
 * Initializes the Drupal date format config.
 *
 * @param {Object<string, ?string|Object<string, ?string>>} state
 *   The shared configuration state object.
 * @param {Object<string, ?string|Object<string, ?string>>} config
 *   The Drupal config to save.
 */
export function configInit(state, config) {
  state.cleanClassCache = config.clean_class ?? {};
}
