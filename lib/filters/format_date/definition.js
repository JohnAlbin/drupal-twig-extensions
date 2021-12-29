/**
 * @file The format_date filter
 *
 * Docs for DateFormatter::format (Drupal 9.3.x):
 *
 * ```
 * new TwigFilter('format_date', [$this->dateFormatter, 'format'])
 * ```
 */

import date from 'locutus/php/datetime/date.js';

export const name = 'format_date';

export const options = {};

export const acceptedArguments = [
  { name: 'type', defaultValue: 'medium' },
  { name: 'format', defaultValue: '' },
  { name: 'timezone', defaultValue: null },
  { name: 'langcode', defaultValue: null },
];

/**
 * Formats a date, using a date type or a custom date format string.
 *
 * @param {Object<string, ?string|Object<string, ?string>>} config
 *   The shared Drupal config.
 * @param {int} timestamp
 *   A UNIX timestamp to format.
 * @param {string} type
 *   (optional) The format to use, one of:
 *   - One of the built-in formats: 'short', 'medium',
 *     'long', 'html_datetime', 'html_date', 'html_time',
 *     'html_yearless_date', 'html_week', 'html_month', 'html_year'.
 *   - The name of a date type defined by a date format config entity.
 *   - The machine name of an administrator-defined date format.
 *   - 'custom', to use `format`.
 *   Defaults to 'medium'.
 * @param {string} format
 *   (optional) If `type` is 'custom', a PHP date format string suitable for
 *   input to date(). Use a backslash to escape ordinary text, so it does not
 *   get interpreted as date format characters.
 * @param {string|null} timezone
 *   (optional) Time zone identifier, as described at
 *   http://php.net/manual/timezones.php Defaults to the time zone used to
 *   display the page.
 * @param {string|null} langcode
 *   (optional) Language code to translate to. NULL (default) means to use
 *   the user interface language for the page.
 *
 * @returns {string}
 *   A translated date string in the requested format. Since the format may
 *   contain user input, this value should be escaped when output.
 */
export function formatDate(
  config,
  timestamp,
  type = 'medium',
  format = '',
  // eslint-disable-next-line no-unused-vars
  timezone = null,
  // eslint-disable-next-line no-unused-vars
  langcode = null,
) {
  // Get format from Drupal.
  if (type !== 'custom') {
    format = config.dateFormats[type];
  }

  if (!format) {
    // Fall back to the 'Fallback date format' type if the format string is
    // empty, either from not finding a requested date format or being given an
    // empty custom format string.
    format = config.dateFormats['fallback'];
  }

  // locutus' date() does not support settings like timezone and langcode.
  return date(format, timestamp);
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
  // The default Drupal formats.
  state.dateFormats = {
    short: 'm/d/Y - H:i',
    medium: 'D, m/d/Y - H:i',
    long: 'l, F j, Y - H:i',
    html_datetime: 'Y-m-dTH:i:sO',
    html_date: 'Y-m-d',
    html_time: 'H:i:s',
    html_yearless_date: 'm-d',
    html_week: 'Y-WW',
    html_month: 'Y-m',
    html_year: 'Y',
    fallback: 'D, m/d/Y - H:i',
  };

  if (Object.prototype.hasOwnProperty.call(config, 'date_format')) {
    // Merge the given date formats with the defaults.
    state.dateFormats = {
      ...state.dateFormats,
      ...config.date_format,
    };
  }
}
