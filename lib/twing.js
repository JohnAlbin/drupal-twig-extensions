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
      // @TODO File bug report; 3rd argument should be options.
      // See https://github.com/twigphp/Twig/blob/3.x/src/TwigFilter.php
      new TwingFilter(filterName, filters[filterName], []),
    );
  });

  Object.keys(functions).forEach((functionName) => {
    twingEnvironment.addFunction(
      // @TODO File bug report; 3rd argument should be options.
      // See https://github.com/twigphp/Twig/blob/3.x/src/TwigFunction.php
      new TwingFunction(functionName, functions[functionName], []),
    );
  });
};

export { Attribute } from './Attribute';
