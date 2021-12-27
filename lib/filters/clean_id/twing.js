import { newTwingFilter } from '../../helpers/twing.js';
import { name, options, acceptedArguments, callable } from './definition.js';

export default newTwingFilter(name, callable, options, acceptedArguments);
