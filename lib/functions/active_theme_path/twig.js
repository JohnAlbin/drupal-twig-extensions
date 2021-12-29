import { newTwigExtension } from '../../helpers/twig.js';
import config from '../../config/twig.js';
import {
  name,
  options,
  acceptedArguments,
  activeThemePath,
} from './definition.js';

export function callable() {
  return activeThemePath(config);
}

export default newTwigExtension(name, callable, options, acceptedArguments);
