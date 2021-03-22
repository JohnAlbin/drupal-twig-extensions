const dummyPassthrough = require('../../helpers/twig/dummyPassthrough');

// eslint-disable camelcase
module.exports = {
  t: dummyPassthrough,
  trans: dummyPassthrough,
  placeholder: dummyPassthrough,
  without: require('../shared/without'),
  clean_class: require('../shared/clean_class'),
  clean_id: require('../shared/clean_id'),
  render: dummyPassthrough,
  format_date: dummyPassthrough,
  drupal_escape: require('./drupal_escape'),
  safe_join: require('./safe_join'),
};
