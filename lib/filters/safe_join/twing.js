import { join as safe_join } from 'twing/dist/cjs/lib/extension/core/filters/join.js';
import { newTwingFilter } from '../../helpers/twing.js';
import { name, options } from './definition.js';

export const callable = safe_join;

export default newTwingFilter(name, callable, options);
