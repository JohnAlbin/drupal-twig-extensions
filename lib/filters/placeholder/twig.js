import { newTwigExtension } from '../../helpers/twig.js';
import { callable as escape } from '../drupal_escape/twig.js';
import {
  name,
  options,
  acceptedArguments,
  wrapPlaceholder,
} from './definition.js';

export const callable = function placeholder(value) {
  return wrapPlaceholder(escape(value, ['html']));
};

export default newTwigExtension(name, callable, options, acceptedArguments);
