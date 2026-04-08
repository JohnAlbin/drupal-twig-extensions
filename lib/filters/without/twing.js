import { newTwingFilter } from '../../helpers/twing.js';
import { name, options, without } from './definition.js';

export function callable(element, ...argsMap) {
  return without(element, ...argsMap);
}

export default newTwingFilter(name, callable, options);
