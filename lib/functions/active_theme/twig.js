import { newTwigExtension } from '../../helpers/twig.js';
import config from '../../config/twig.js';
import { name, options, acceptedArguments, activeTheme } from './definition.js';

export function callable() {
  return activeTheme(config);
}

export default newTwigExtension(name, callable, options, acceptedArguments);
