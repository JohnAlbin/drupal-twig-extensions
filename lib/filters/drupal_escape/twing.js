import { escape } from 'twing/dist/cjs/lib/extension/core/filters/escape.js';
import { newTwingFilter } from '../../helpers/twing.js';
import { name, options, acceptedArguments } from './definition.js';

export const callable = escape;

export default newTwingFilter(name, callable, options, acceptedArguments);
