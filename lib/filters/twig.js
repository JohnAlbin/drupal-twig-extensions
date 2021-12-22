import clean_class from './clean_class/twig.js';
import clean_id from './clean_id/twig.js';
import drupal_escape from './drupal_escape/twig.js';
import { options as formatDateOptions } from './format_date/definition.js';
import { options as placeholderOptions } from './placeholder/definition.js';
import { options as renderOptions } from './render/definition.js';
import safe_join from './safe_join/twig.js';
import { options as tOptions } from './t/definition.js';
import { options as transOptions } from './trans/definition.js';
import without from './without/twig.js';
import { newPassThroughExtension } from '../helpers/twig.js';

export default [
  clean_class,
  clean_id,
  drupal_escape,
  newPassThroughExtension('format_date', formatDateOptions),
  newPassThroughExtension('placeholder', placeholderOptions),
  newPassThroughExtension('render', renderOptions),
  safe_join,
  newPassThroughExtension('t', tOptions),
  newPassThroughExtension('trans', transOptions),
  without,
];
