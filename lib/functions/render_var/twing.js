import { newTwingFunction } from '../../helpers/twing.js';
import { name, options, renderVar } from './definition.js';

export async function callable(...args) {
  return renderVar(...args);
}

export default newTwingFunction(name, callable, options);
