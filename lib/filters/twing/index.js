const dummyPassthrough = require('../../helpers/twing/dummyPassthrough');

function wrap(func) {
  return function (argument) {
    return Promise.resolve(func(argument));
  };
}

// eslint-disable camelcase
module.exports = {
  t: dummyPassthrough,
  trans: dummyPassthrough,
  placeholder: dummyPassthrough,
  without: wrap(require('../shared/without')),
  clean_class: wrap(require('../shared/clean_class')),
  clean_id: wrap(require('../shared/clean_id')),
  render: dummyPassthrough,
  format_date: dummyPassthrough,
  drupal_escape: require('./drupal_escape'),
  safe_join: require('./safe_join'),
};
