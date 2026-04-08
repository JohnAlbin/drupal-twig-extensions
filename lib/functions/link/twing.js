import { newTwingFunction } from '../../helpers/twing.js';
import { name, options, acceptedArguments, link } from './definition.js';

export function callable(...args) {
  return link(...args);
}

export default newTwingFunction(name, callable, options, acceptedArguments);
