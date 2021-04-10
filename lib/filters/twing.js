import clean_class from './clean_class/twing';
import clean_id from './clean_id/twing';
import drupal_escape from './drupal_escape/twing';
import safe_join from './safe_join/twing';
import without from './without/twing';
import { passThroughExtension } from '../helpers/twing';

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
