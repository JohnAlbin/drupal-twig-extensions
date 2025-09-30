import { newTwingFilter } from '../../helpers/twing.js';
import { name, options, acceptedArguments } from './definition.js';

function surround(value, attributeName, attributeValue) {
  return `<div ${attributeName}="${attributeValue}">${value}</div>`;
}
export function callable(value, attributeName, attributeValue) {
  if (typeof value === 'object') {
    const output = [];
    Object.values(value).forEach((value) => {
      output.push(surround(value, attributeName, attributeValue));
    });
    return output.join(' ');
  }
  return surround(value, attributeName, attributeValue);
}

export default newTwingFilter(name, callable, options, acceptedArguments);
