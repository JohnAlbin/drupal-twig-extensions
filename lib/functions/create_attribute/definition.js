/**
 * @file The create_attribute function
 *
 * Docs for TwigExtension::createAttribute (Drupal 9.3.x):
 *
 * ```
 * new TwigFunction('create_attribute', [$this, 'createAttribute'])
 * ```
 */

import Attribute from '../../Attribute.js';

export const name = 'create_attribute';

export const options = {};

export const acceptedArguments = [{ name: 'attributes', defaultValue: {} }];

/**
 * Creates an Attribute object.
 *
 * @param {Map<string, string | string[] | Map<number, string>> | Record<string, string | string[]> | undefined} attributes
 *   (optional) An associative array of key-value pairs to be converted to
 *   HTML attributes.
 *
 * @returns {Attribute}
 *   An attributes object that has the given attributes.
 */
export function createAttribute(attributes) {
  return new Attribute(attributes);
}
