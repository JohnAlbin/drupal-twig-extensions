import clean_class from './clean_class/twing';
import clean_id from './clean_id/twing';
import drupal_escape from './drupal_escape/twing';
import { options as formatDateOptions } from './format_date/definition';
import { options as placeholderOptions } from './placeholder/definition';
import { options as renderOptions } from './render/definition';
import safe_join from './safe_join/twing';
import { options as tOptions } from './t/definition';
import { options as transOptions } from './trans/definition';
import without from './without/twing';
import { newPassThroughFilter } from '../helpers/twing';

export default [
  clean_class,
  clean_id,
  drupal_escape,
  newPassThroughFilter('format_date', formatDateOptions),
  newPassThroughFilter('placeholder', placeholderOptions),
  newPassThroughFilter('render', renderOptions),
  safe_join,
  newPassThroughFilter('t', tOptions),
  newPassThroughFilter('trans', transOptions),
  without,
];
