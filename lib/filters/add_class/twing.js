import { newTwingFilter } from '../../helpers/twing.js';
import { name, options, acceptedArguments } from './definition.js';

function surround(value, className) {
  return `<div class="${className}">${value}</div>`;
}
export function callable(value, clasName) {
  if (typeof value === 'object') {
    const output = [];
    Object.values(value).forEach((value) => {
      output.push(surround(value, clasName));
    });
    return output.join(' ');
  }
  return surround(value, clasName);
}

export default newTwingFilter(name, callable, options, acceptedArguments);
