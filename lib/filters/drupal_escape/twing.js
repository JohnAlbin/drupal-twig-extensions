import { escape } from 'twing/dist/cjs/lib/extension/core/filters/escape';
import { name, options } from './definition';
import { newTwingFilter } from '../../helpers/twing';

export default newTwingFilter(name, escape, options);
