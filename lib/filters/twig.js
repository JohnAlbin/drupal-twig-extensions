import { newPassThroughExtension } from '../helpers/twig.js';
import cleanClassFilter from './clean_class/twig.js';
import cleanIdFilter from './clean_id/twig.js';
import drupalEscapeFilter from './drupal_escape/twig.js';
import formatDateFilter from './format_date/twig.js';
import placeholderFilter from './placeholder/twig.js';
import renderFilter from './render/twig.js';
import safeJoinFilter from './safe_join/twig.js';
import {
  options as tOptions,
  acceptedArguments as tAcceptedArguments,
} from './t/definition.js';
import {
  options as transOptions,
  acceptedArguments as transAcceptedArguments,
} from './trans/definition.js';
import withoutFilter from './without/twig.js';

const filters = [
  cleanClassFilter,
  cleanIdFilter,
  drupalEscapeFilter,
  formatDateFilter,
  placeholderFilter,
  renderFilter,
  safeJoinFilter,
  newPassThroughExtension('t', tOptions, tAcceptedArguments),
  newPassThroughExtension('trans', transOptions, transAcceptedArguments),
  withoutFilter,
];

export default filters;
