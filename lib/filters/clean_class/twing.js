import { newTwingFilter } from '../../helpers/twing.js';
import config from '../../config/twing.js';
import { name, options, acceptedArguments, cleanClass } from './definition.js';

export function callable(string) {
  return cleanClass(config, string);
}

export default newTwingFilter(name, callable, options, acceptedArguments);
