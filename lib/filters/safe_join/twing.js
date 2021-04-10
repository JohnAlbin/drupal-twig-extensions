import { join as safe_join } from 'twing/dist/cjs/lib/extension/core/filters/join';
import { name, options } from './definition';
import { newTwingFilter } from '../../helpers/twing';

export default newTwingFilter(name, safe_join, options);
