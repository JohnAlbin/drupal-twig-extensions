import { newTwingFunction } from '../../helpers/twing.js';
import {
  name,
  options,
  acceptedArguments,
  createAttribute,
} from './definition.js';

export async function callable(...args) {
  return createAttribute(...args);
}

export default newTwingFunction(name, callable, options, acceptedArguments);
