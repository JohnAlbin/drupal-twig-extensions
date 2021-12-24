import { escape } from 'twing/dist/cjs/lib/extension/core/filters/escape.js';
import { newTwingFilter } from '../../helpers/twing.js';
import { name, options, acceptedArguments } from './definition.js';

export default newTwingFilter(name, escape, options, acceptedArguments);
