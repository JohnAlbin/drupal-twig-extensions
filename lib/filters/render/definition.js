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
 * @returns {string}
 *   The rendered output or a \Twig\Markup object.
 */
export function renderVar(arg) {
  return `${arg}`;
}
