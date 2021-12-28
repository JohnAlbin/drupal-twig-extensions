/**
 * @file The without filter
 *
 * Docs for TwigExtension::withoutFilter (Drupal 9.3.x):
 *
 * ```
 * new TwigFilter('without', [$this, 'withoutFilter'])
 * ```
 */

import cloneDeep from 'lodash.clonedeep';

export const name = 'without';

export const options = {
  is_variadic: true,
};

// The is_variadic option means this filter accepts a variable number of args.
export const acceptedArguments = [];

/**
 * Removes child elements from a copy of the original array.
 *
 * Creates a copy of the renderable array and removes child elements by key
 * specified through filter's arguments. The copy can be printed without these
 * elements. The original renderable array is still available and can be used
 * to print child elements in their entirety in the twig template.
 *
 * @param {Array|Object} element
 *   The parent renderable array to exclude the child items.
 * @param {...string|string[]} ...
 *   The string keys of element to prevent printing. Arguments can include
 *   string keys directly, or arrays of string keys to hide.
 *
 * @returns {Object}
 *   The filtered renderable array.
 */
export function callable(element) {
  if (!element) {
    return {};
  }

  const filteredElement = cloneDeep(element);

  let args = Array.prototype.slice.call(arguments, 1);
  if (args.length) {
    let exclude = [];
    args.forEach((name) => {
      if (Array.isArray(name)) {
        exclude = exclude.concat(name);
      } else {
        exclude.push(name);
      }
    });
    exclude.forEach((name) => {
      delete filteredElement[name];
    });
  }

  return filteredElement;
}
