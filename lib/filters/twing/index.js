import dummyPassthrough from '../../helpers/twing/dummyPassthrough';
import without from '../shared/without';
import clean_class from '../shared/clean_class';
import clean_id from '../shared/clean_id';
import drupal_escape from './drupal_escape';
import safe_join from './safe_join';

function wrap(func) {
  return async function (argument) {
    return func(argument);
  };
}

// eslint-disable camelcase
export default {
  t: dummyPassthrough,
  trans: dummyPassthrough,
  placeholder: dummyPassthrough,
  without: wrap(without),
  clean_class: wrap(clean_class),
  clean_id: wrap(clean_id),
  render: dummyPassthrough,
  format_date: dummyPassthrough,
  drupal_escape,
  safe_join,
};
