import { newTwigExtension } from '../../helpers/twig.js';
import { name, options, without } from './definition.js';

export function callable(element, args) {
  return without(element, ...args);
}

export default newTwigExtension(name, callable, options);
