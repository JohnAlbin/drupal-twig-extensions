import { newPassThroughFilter } from '../helpers/twing.js';
import clean_class from './clean_class/twing.js';
import clean_id from './clean_id/twing.js';
import drupal_escape from './drupal_escape/twing.js';
import format_date from './format_date/twing.js';
import placeholder from './placeholder/twing.js';
import render from './render/twing.js';
import safe_join from './safe_join/twing.js';
import { options as tOptions } from './t/definition.js';
import { options as transOptions } from './trans/definition.js';
import without from './without/twing.js';
import { configInit as cleanClassConfigInit } from './clean_class/definition.js';
import { configInit as formatDateConfigInit } from './format_date/definition.js';

const filters = [
  clean_class,
  clean_id,
  drupal_escape,
  format_date,
  placeholder,
  render,
  safe_join,
  newPassThroughFilter('t', tOptions),
  newPassThroughFilter('trans', transOptions),
  without,
];

export default filters;

export const filtersConfigInit = [cleanClassConfigInit, formatDateConfigInit];
