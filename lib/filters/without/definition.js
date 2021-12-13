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
 * @param {...string|string[]} ...
 *   The string keys of element to prevent printing. Arguments can include
 *   string keys directly, or arrays of string keys to hide.
 *
 * @return {Object}
 *   The filtered renderable array.
 */
export const callable = function (element) {
  if (!element) {
    return {};
  }

  const filteredElement = {
    ...element,
  };

  let args = Array.prototype.slice.call(arguments, 1);
  if (args[0]) {
    let exclude = [];
    args[0].forEach((name) => {
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
};
