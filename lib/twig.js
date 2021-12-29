import filters from './filters/twig.js';
import functions from './functions/twig.js';
import filtersConfigInit from './filters/configInit.js';
import functionsConfigInit from './functions/configInit.js';
import state from './config/twig.js';

/**
 * Adds all the extensions to the given Twig instance.
 *
 * @param {Twig} twigInstance
 *   The instance of Twig to modify.
 * @param {Object<string, ?string|Object<string, ?string>>} config
 *   The Drupal config to use.
 */
export function addDrupalExtensions(twigInstance, config = {}) {
  filters.forEach((filterArguments) => {
    twigInstance.extendFilter(...filterArguments);
  });

  functions.forEach((functionArguments) => {
    twigInstance.extendFunction(...functionArguments);
  });

  [...filtersConfigInit, ...functionsConfigInit].forEach((configInit) => {
    configInit(state, config);
  });
}

export { default as Attribute } from './Attribute.js';
