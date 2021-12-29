import { newTwingFunction } from '../../helpers/twing.js';
import config from '../../config/twing.js';
import {
  name,
  options,
  acceptedArguments,
  activeThemePath,
} from './definition.js';

export function callable() {
  return activeThemePath(config);
}

export default newTwingFunction(name, callable, options, acceptedArguments);
