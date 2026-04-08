import { isPlainObject } from 'is-plain-object';
import { newTwingFilter } from '../../helpers/twing.js';
import { name, options, acceptedArguments } from './definition.js';

function isTraversable(value) {
  if (isPlainObject(value)) {
    return true;
  }
  if (value !== null && value !== undefined) {
    if (typeof value === 'string') {
      return false;
    }
    if (typeof value['entries'] === 'function') {
      return true;
    }
    if (
      typeof value[Symbol.iterator] === 'function' ||
      typeof value['next'] === 'function'
    ) {
      return true;
    }
  }
  return false;
}

function iteratorToArray(value) {
  if (Array.isArray(value)) {
    return value;
  } else {
    let result = [];
    if (value.entries) {
      for (let entry of value.entries()) {
        result.push(entry[1]);
      }
    } else if (typeof value[Symbol.iterator] === 'function') {
      for (let entry of value) {
        result.push(entry);
      }
    } else if (typeof value['next'] === 'function') {
      let next;
      while ((next = value.next()) && !next.done) {
        result.push(next.value);
      }
    } else {
      for (let k in value) {
        result.push(value[k]);
      }
    }
    return result;
  }
}

const joinSynchronously = (value, glue, and) => {
  if (value == null) {
    return '';
  }
  if (glue == null) {
    glue = '';
  }
  if (isTraversable(value)) {
    value = iteratorToArray(value);
    // this is ugly, but we have to ensure that each element of the array is rendered as PHP would render it
    const safeValue = value.map((item) => {
      if (typeof item === 'boolean') {
        return item === true ? '1' : '';
      }
      if (Array.isArray(item)) {
        return 'Array';
      }
      return item;
    });
    if (and == null || and === glue) {
      return safeValue.join(glue);
    }
    if (safeValue.length === 1) {
      return safeValue[0];
    }
    return (
      safeValue.slice(0, -1).join(glue) + and + safeValue[safeValue.length - 1]
    );
  }
  return '';
};

export function callable(value, glue) {
  const newValue =
    typeof value === 'object' && !isTraversable(value)
      ? Object.values(value)
      : value;
  return joinSynchronously(newValue, glue);
}

export default newTwingFilter(name, callable, options, acceptedArguments);
