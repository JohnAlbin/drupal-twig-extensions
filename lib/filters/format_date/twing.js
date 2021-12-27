import { newTwingFilter } from '../../helpers/twing.js';
import { name, options, acceptedArguments, formatDate } from './definition.js';

const callable = formatDate;

export default newTwingFilter(name, callable, options, acceptedArguments);
