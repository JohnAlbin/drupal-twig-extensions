import { newPassThroughFilter } from '../helpers/twing.js';
import cleanClassFilter from './clean_class/twing.js';
import cleanIdFilter from './clean_id/twing.js';
import drupalEscapeFilter from './drupal_escape/twing.js';
import formatDateFilter from './format_date/twing.js';
import placeholderFilter from './placeholder/twing.js';
import renderFilter from './render/twing.js';
import safeJoinFilter from './safe_join/twing.js';
import { options as tOptions } from './t/definition.js';
import { options as transOptions } from './trans/definition.js';
import withoutFilter from './without/twing.js';
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
  newPassThroughFilter('t', tOptions),
  newPassThroughFilter('trans', transOptions),
  withoutFilter,
];

export default filters;

export const filtersConfigInit = [cleanClassConfigInit, formatDateConfigInit];
