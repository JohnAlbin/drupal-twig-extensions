/**
 * @file The clean_id filter
 *
 * Docs from TwigExtension::getFilters (Drupal 9.3.x):
 *
 * ```
 * new TwigFilter('clean_id', '\Drupal\Component\Utility\Html::getId')
 * ```
 */

export const name = 'clean_id';

export const options = {};

export const acceptedArguments = [];

/**
 * Prepares a string for use as a valid HTML ID.
 *
 * Only use this function when you want to intentionally skip the uniqueness
 * guarantee of \Drupal\Component\Utility\Html::getUniqueId().
 *
 * @param {string} id
 *   The ID to clean.
 *
 * @returns {string}
 *   The cleaned ID.
 *
 * @see \Drupal\Component\Utility\Html::getUniqueId()
 */
export function callable(id) {
  // Ensure a valid string is being passed.
  if (!id || !id.toLowerCase) {
    return '';
  }

  const filter = {
    ' ': '-',
    _: '-',
    '[': '-',
    ']': '',
  };

  id = id.toLowerCase().replace(
    new RegExp(
      Object.keys(filter)
        .map(function (value) {
          return `(${value.replace(/[\\?*+|.^${}[\]()]/g, '\\$&')})`;
        })
        .join('|'),
      'g',
    ),
    function (substring) {
      return filter[substring];
    },
  );

  // As defined in http://www.w3.org/TR/html4/types.html#type-name, HTML IDs can
  // only contain letters, digits ([0-9]), hyphens ("-"), underscores ("_"),
  // colons (":"), and periods ("."). We strip out any character not in that
  // list. Note that the CSS spec doesn't allow colons or periods in identifiers
  // (http://www.w3.org/TR/CSS21/syndata.html#characters), so we strip those two
  // characters as well.
  id = id.replace(/[^A-Za-z0-9\-_]/g, '');

  // Removing multiple consecutive hyphens.
  id = id.replace(/-+/g, '-');
  return id;
}
