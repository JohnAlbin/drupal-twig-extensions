import { newTwingFunction } from '../../helpers/twing.js';
import config from '../../config/twing.js';
import { name, options, acceptedArguments, activeTheme } from './definition.js';

export function callable() {
  return activeTheme(config);
}

export default newTwingFunction(name, callable, options, acceptedArguments);
