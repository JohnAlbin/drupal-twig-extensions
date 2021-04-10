import clean_class from './clean_class/twig';
import clean_id from './clean_id/twig';
import drupal_escape from './drupal_escape/twig';
import { options as formatDateOptions } from './format_date/definition';
import { options as placeholderOptions } from './placeholder/definition';
import { options as renderOptions } from './render/definition';
import safe_join from './safe_join/twig';
import { options as tOptions } from './t/definition';
import { options as transOptions } from './trans/definition';
import without from './without/twig';
import { newPassThroughExtension } from '../helpers/twig';

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
