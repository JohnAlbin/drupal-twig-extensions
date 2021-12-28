import { newTwigExtension } from '../../helpers/twig.js';
import { name, callable, options } from './definition.js';

export function without(element, args) {
  return callable(element, ...args);
}

export default newTwigExtension(name, without, options);
