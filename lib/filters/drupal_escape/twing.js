import { newTwingFilter } from '../../helpers/twing.js';
import { name, options, acceptedArguments } from './definition.js';

// Simple escape function
export function callable(str) {
  if (typeof str !== 'string') {
    str = String(str);
  }
  return str
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;');
}
export default newTwingFilter(name, callable, options, acceptedArguments);
