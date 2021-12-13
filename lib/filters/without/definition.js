export const name = 'without';

export const options = {};

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
 * @param {...string} ...
 *   The string keys of element to prevent printing.
 *
 * @return {Object}
 *   The filtered renderable array.
 */
export const callable = function (element) {
  const filteredElement = {};

  if (!element) {
    return [];
  }

  let args = Array.prototype.slice.call(arguments, 1);
  if (args[0]) {
    // The filter's "arguments can include string keys directly, or arrays of
    // string keys to hide".
    let exclude = [];
    args[0].forEach((name) => {
      if (Array.isArray(name)) {
        exclude = exclude.concat(name);
      } else {
        exclude.push(name);
      }
    });
    for (let name of Object.keys(element)) {
      if (!exclude.includes(name)) {
        filteredElement[name] = element[name];
      }
    }
  }

  return filteredElement;
};
