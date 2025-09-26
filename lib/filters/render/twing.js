import { newTwingFilter } from '../../helpers/twing.js';
import { name, options, acceptedArguments, renderVar } from './definition.js';

export default newTwingFilter(name, renderVar, options, acceptedArguments);
