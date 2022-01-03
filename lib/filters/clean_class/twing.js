import { newTwingFilter } from '../../helpers/twing.js';
import config from '../../config.js';
import { name, options, acceptedArguments, cleanClass } from './definition.js';

export async function callable(string) {
  return cleanClass(config, string);
}

export default newTwingFilter(name, callable, options, acceptedArguments);
