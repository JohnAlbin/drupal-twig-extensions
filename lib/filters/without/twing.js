import { newTwingFilter } from '../../helpers/twing.js';
import { name, callable, options } from './definition.js';

export function without(element, argsMap) {
  // Twing will give an is_variadic filter its arguments as a Map.
  const args = Array.from(argsMap.values()).map((value) => {
    if (value instanceof Map) {
      // Twing v5 converts Twig [] into JS Maps; convert to an Array.
      return Array.from(value.values());
    } else {
      return value;
    }
  });
  return callable(element, ...args);
}

export default newTwingFilter(name, without, options);
