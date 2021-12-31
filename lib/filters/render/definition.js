/**
 * @file The render filter
 *
 * Docs for TwigExtension::renderVar (Drupal 9.3.x):
 *
 * ```
 * new TwigFilter('render', [$this, 'renderVar'])
 * ```
 */

export const name = 'render';

export const options = {};

export const acceptedArguments = [];

/**
 * Wrapper around render() for twig printed output.
 *
 * If an object is passed which does not implement __toString(),
 * RenderableInterface or toString() then an exception is thrown;
 * Other objects are casted to string. However in the case that the
 * object is an instance of a \Twig\Markup object it is returned directly
 * to support auto escaping.
 *
 * If an array is passed it is rendered via render() and scalar values are
 * returned directly.
 *
 * @param {string|Object} arg
 *   String, Object or Render Array.
 *
 * @throws {Error}
 *   Throws an error if given a function instead of data.
 *
 * @returns {string}
 *   The rendered output or a \Twig\Markup object.
 */
export function renderVar(arg) {
  const typeofArg =
    arg === null ? 'null' : Array.isArray(arg) ? 'array' : typeof arg;

  // Return early for NULL, empty arrays, empty strings and FALSE booleans.
  // @todo https://www.drupal.org/project/drupal/issues/3240093 Determine if
  //   this behavior is correct or should be deprecated.
  if (
    typeofArg === 'null' ||
    // We should treat JavaScript's undefined like PHP's null.
    typeofArg === 'undefined' ||
    // A PHP array is more like a JavaScript object, so we check for an empty
    // Array or Object.
    (typeofArg === 'array' && arg.length === 0) ||
    (typeofArg === 'object' && Object.keys(arg).length === 0) ||
    arg === '' ||
    arg === false
  ) {
    return '';
  }

  // In PHP, Booleans cast to a string as "1" or "0". We handle Boolean false
  // above.
  if (arg === true) {
    return '1';
  }

  // Optimize for scalars as it is likely they come from the escape filter.
  if (
    typeofArg === 'number' ||
    typeofArg === 'bigint' ||
    typeofArg === 'string'
  ) {
    return arg;
  }

  // A Symbol cannot be cast to a string. We return the Symbol's description.
  if (typeofArg === 'symbol') {
    return arg.description;
  }

  // JavaScript will cast an array to a string of the values joined with a
  // comma. But, if given a regular (non-render) array, Drupal's render() will
  // throw errors saying `"0" is an invalid render array key` and print an empty
  // string for that variable. Until we implement a renderer, we should return
  // an empty string.
  if (typeofArg === 'array') {
    return '';
  }

  // We have tested `typeof arg` for 'null', 'undefined', 'boolean', 'number',
  // 'bigint', 'string', and 'symbol' and returned a value. Beyond this point,
  // everything should be an 'object' or a 'function', both of which have a
  // toString() method. See the full list of possible "typeof" values.
  // @see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/typeof

  if (typeof arg['toRenderable'] === 'function') {
    return arg.toRenderable();
  } else if (typeof arg['__toString'] === 'function') {
    return arg.__toString();
  }

  // TODO: Neither Twig.js or Twing seem capable of sending a JS function as a
  //   variable; Twig.js executes the function and uses the return value as the
  //   variable and Twing throws a TwingErrorRuntime.
  // Throw an error if given a function instead of a render array or scalar.
  // if (typeofArg === 'function') {
  //   throw new Error('A function cannot be printed.');
  // }

  // This is a render array, with special simple cases already handled.
  // Early return if this element was pre-rendered (no need to re-render).
  if (arg['#printed'] && arg['#markup']) {
    return arg['#markup'];
  }

  arg['#printed'] = false;

  // Cast the Object to a string using its toString method.
  return `${arg}`;

  // TODO: Add config for a render function.
  // const string = `${arg}`;
  //
  // If the object uses the prototype's toString method or returns something
  // that looks like "[object Object]", we use our custom renderer function.
  // if (/\[object \S+]/.test(string)) {
  //   return renderer(arg);
  // }
  // return string;
}
