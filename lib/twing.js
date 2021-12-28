import filters, { filtersConfigInit } from './filters/twing.js';
import functions, { functionsConfigInit } from './functions/twing.js';
import state from './config/twing.js';

/**
 * Adds all the extensions to the given Twing environment.
 *
 * @param {TwingEnvironment} twingEnvironment
 *   The Twing environment to modify.
 * @param {Object<string, ?string|Object<string, ?string>>} config
 *   The Drupal config to use.
 */
export const addDrupalExtensions = function (twingEnvironment, config = {}) {
  filters.forEach((twingFilter) => {
    twingEnvironment.addFilter(twingFilter);
  });

  functions.forEach((twingFunction) => {
    twingEnvironment.addFunction(twingFunction);
  });

  [...filtersConfigInit, ...functionsConfigInit].forEach((configInit) => {
    configInit(state, config);
  });
};

export { default as Attribute } from './Attribute.js';
