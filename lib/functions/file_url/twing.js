import { newTwingFunction } from '../../helpers/twing.js';
import config from '../../config.js';
import { name, options, acceptedArguments, fileUrl } from './definition.js';

export async function callable(uri) {
  return fileUrl(config, uri);
}

export default newTwingFunction(name, callable, options, acceptedArguments);
