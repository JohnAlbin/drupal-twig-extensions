import { newTwigExtension } from '../../helpers/twig.js';
import config from '../../config.js';
import { name, options, acceptedArguments, cleanClass } from './definition.js';

export function callable(string) {
  return cleanClass(config, string);
}

export default newTwigExtension(name, callable, options, acceptedArguments);
