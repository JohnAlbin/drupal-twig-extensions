import filters from './filters/twing';
import functions from './functions/twing';

/**
 * Adds all the extensions to the given Twing environment.
 *
 * @param {TwingEnvironment} twingEnvironment The Twing environment to modify.
 */
export const addDrupalExtensions = function (twingEnvironment) {
  filters.forEach((twingFilter) => {
    twingEnvironment.addFilter(twingFilter);
  });

  functions.forEach((twingFunction) => {
    twingEnvironment.addFunction(twingFunction);
  });
};

export { Attribute } from './Attribute';
