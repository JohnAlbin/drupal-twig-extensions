import { escape } from 'twing/dist/cjs/lib/extension/core/filters/escape';
import { name, options, acceptedArguments } from './definition';
import { TwingFilter } from 'twing';

export default new TwingFilter(name, escape, acceptedArguments, options);
