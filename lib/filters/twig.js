import clean_class from './clean_class/twig';
import clean_id from './clean_id/twig';
import drupal_escape from './drupal_escape/twig';
import safe_join from './safe_join/twig';
import without from './without/twig';
import { passThroughExtension } from '../helpers/twig';

// eslint-disable camelcase
export default {
  clean_class,
  clean_id,
  drupal_escape,
  format_date: passThroughExtension,
  placeholder: passThroughExtension,
  render: passThroughExtension,
  safe_join,
  t: passThroughExtension,
  trans: passThroughExtension,
  without,
};
