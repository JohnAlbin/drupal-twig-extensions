import { newTwingFilter } from '../../helpers/twing.js';
import { name, options, acceptedArguments, renderVar } from './definition.js';

export async function callable(...args) {
  return renderVar(...args);
}

export default newTwingFilter(name, callable, options, acceptedArguments);
