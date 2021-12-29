/**
 * @file The trans filter
 *
 * @see The t filter for docs.
 *
 * ```
 * new TwigFilter('trans', 't', ['is_safe' => ['html']])
 * ```
 */

export const name = 'trans';

export { options, acceptedArguments } from '../t/definition.js';
