import { join as safe_join } from 'twing/dist/cjs/lib/extension/core/filters/join.js';
import { name, options } from './definition.js';
import { newTwingFilter } from '../../helpers/twing.js';

export default newTwingFilter(name, safe_join, options);
