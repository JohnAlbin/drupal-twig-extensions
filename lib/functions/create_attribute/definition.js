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
 * @param {?Object<string, string|string[]>} attributes
 *   (optional) An associative array of key-value pairs to be converted to
 *   HTML attributes.
 *
 * @returns {Attribute}
 *   An attributes object that has the given attributes.
 */
export function createAttribute(attributes = {}) {
  let attributeObject;

  // @TODO: https://github.com/JohnAlbin/drupal-twig-extensions/issues/1
  if (attributes instanceof Map || Array.isArray(attributes)) {
    attributeObject = new Attribute(attributes);
  } else {
    attributeObject = new Attribute();

    // Loop through all the given attributes, if any.
    if (attributes) {
      Object.keys(attributes).forEach((key) => {
        // Ensure class is always an array.
        if (key === 'class' && !Array.isArray(attributes[key])) {
          attributeObject.setAttribute(key, [attributes[key]]);
        } else {
          attributeObject.setAttribute(key, attributes[key]);
        }
      });
    }
  }

  return attributeObject;
}
