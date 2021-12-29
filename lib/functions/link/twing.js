import { newTwingFunction } from '../../helpers/twing.js';
import { name, options, acceptedArguments, link } from './definition.js';

export async function callable(...args) {
  return link(...args);
}

export default newTwingFunction(name, callable, options, acceptedArguments);
