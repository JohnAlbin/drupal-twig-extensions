/**
 * @file The render_var function
 *
 * Docs for TwigExtension::getActiveTheme (Drupal 9.3.x):
 *
 * ```
 * new TwigFunction('render_var', [$this, 'renderVar'])
 * ```
 */

export const name = 'render_var';

export const options = {};

export const acceptedArguments = [{ name: 'arg' }];

export { renderVar } from '../../filters/render/definition.js';
