import { TwingFilter, TwingFunction } from 'twing';
import filters from './filters/twing';
import functions from './functions/twing';

/**
 * Adds all the extensions to the given Twing environment.
 *
 * @param {TwingEnvironment} twingEnvironment The Twing environment to modify.
 */
export const addDrupalExtensions = function (twingEnvironment) {
  Object.keys(filters).forEach((filterName) => {
    twingEnvironment.addFilter(
      // @TODO needs 4 arguments.
      new TwingFilter(filterName, filters[filterName]),
    );
  });

  Object.keys(functions).forEach((functionName) => {
    twingEnvironment.addFunction(
      // @TODO needs 4 arguments.
      new TwingFunction(functionName, functions[functionName]),
    );
  });
};
