import { newPassThroughExtension } from '../helpers/twig.js';
import clean_class from './clean_class/twig.js';
import clean_id from './clean_id/twig.js';
import drupal_escape from './drupal_escape/twig.js';
import format_date from './format_date/twig.js';
import placeholder from './placeholder/twig.js';
import render from './render/twig.js';
import safe_join from './safe_join/twig.js';
import { options as tOptions } from './t/definition.js';
import { options as transOptions } from './trans/definition.js';
import without from './without/twig.js';
import { configInit as formatDateConfigInit } from './format_date/definition.js';

const filters = [
  clean_class,
  clean_id,
  drupal_escape,
  format_date,
  placeholder,
  render,
  safe_join,
  newPassThroughExtension('t', tOptions),
  newPassThroughExtension('trans', transOptions),
  without,
];

export default filters;

export const filtersConfigInit = [formatDateConfigInit];
