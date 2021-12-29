import { newTwingFilter } from '../../helpers/twing.js';
import { name, options, without } from './definition.js';

export async function callable(element, argsMap) {
  // Twing will give an is_variadic filter its arguments as a Map.
  const args = Array.from(argsMap.values()).map((value) => {
    if (value instanceof Map) {
      // Twing v5 converts Twig [] into JS Maps; convert to an Array.
      return Array.from(value.values());
    } else {
      return value;
    }
  });
  return without(element, ...args);
}

export default newTwingFilter(name, callable, options);
