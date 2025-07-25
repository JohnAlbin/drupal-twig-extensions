import { newTwingFunction } from '../../helpers/twing.js';
import { acceptedArguments, name, options, renderVar } from './definition.js';

export default newTwingFunction(name, renderVar, options, acceptedArguments);
