import { newPassThroughExtension } from '../helpers/twig.js';
import cleanClassFilter from './clean_class/twig.js';
import cleanIdFilter from './clean_id/twig.js';
import drupalEscapeFilter from './drupal_escape/twig.js';
import formatDateFilter from './format_date/twig.js';
import placeholderFilter from './placeholder/twig.js';
import renderFilter from './render/twig.js';
import safeJoinFilter from './safe_join/twig.js';
import { options as tOptions } from './t/definition.js';
import { options as transOptions } from './trans/definition.js';
import withoutFilter from './without/twig.js';
import { configInit as cleanClassConfigInit } from './clean_class/definition.js';
import { configInit as formatDateConfigInit } from './format_date/definition.js';

const filters = [
  cleanClassFilter,
  cleanIdFilter,
  drupalEscapeFilter,
  formatDateFilter,
  placeholderFilter,
  renderFilter,
  safeJoinFilter,
  newPassThroughExtension('t', tOptions),
  newPassThroughExtension('trans', transOptions),
  withoutFilter,
];

export default filters;

export const filtersConfigInit = [cleanClassConfigInit, formatDateConfigInit];
