import { newTwigExtension } from '../../helpers/twig.js';
import config from '../../config/twig.js';
import { name, options, acceptedArguments, fileUrl } from './definition.js';

export function callable(uri) {
  return fileUrl(config, uri);
}

export default newTwigExtension(name, callable, options, acceptedArguments);
