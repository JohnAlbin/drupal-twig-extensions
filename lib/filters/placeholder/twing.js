import { newTwingFilter } from '../../helpers/twing.js';
import { callable as escape } from '../drupal_escape/twing.js';
import {
  name,
  options,
  acceptedArguments,
  wrapPlaceholder,
} from './definition.js';

export async function callable(template, value) {
  const escapedValue = await escape(template, value, 'html', null, true);
  return wrapPlaceholder(escapedValue);
}

export default newTwingFilter(name, callable, options, acceptedArguments);
