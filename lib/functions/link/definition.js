/**
 * @file The link function
 *
 * Docs for TwigExtension::getLink (Drupal 9.3.x):
 *
 * ```
 * new TwigFunction('link', [$this, 'getLink'])
 * ```
 */

import { createAttribute } from '../create_attribute/definition.js';

export const name = 'link';

export const options = {};

export const acceptedArguments = [
  { name: 'text' },
  { name: 'url' },
  { name: 'attributes', defaultValue: {} },
];

/**
 * Gets a rendered link from a url object.
 *
 * @param {string} text
 *   The link text for the anchor tag as a translated string.
 * @param {string|\Drupal\Core\Url} url
 *   The URL object or string used for the link.
 * @param {Object|\Drupal\Core\Template\Attribute} attributes
 *   An optional Object or Attribute object of link attributes.
 *
 * @returns {string}
 *   A link to the given URL.
 */
export function link(text, url, attributes = {}) {
  return `<a href="${url}"${createAttribute(attributes)}>${text}</a>`;
}
