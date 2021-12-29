import { newTwingFilter } from '../../helpers/twing.js';
import { name, options, acceptedArguments, cleanID } from './definition.js';

export async function callable(...args) {
  return cleanID(...args);
}

export default newTwingFilter(name, callable, options, acceptedArguments);
