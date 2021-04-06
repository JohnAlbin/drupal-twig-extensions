const { TwingFilter, TwingFunction } = require('twing');

/**
 * Adds all the extensions to the given Twing environment.
 *
 * @param {TwingEnvironment} twingEnvironment The Twing environment to modify.
 */
module.exports = {
  addDrupalExtensions: function (twingEnvironment) {
    const filters = require('../lib/filters/twing');
    Object.keys(filters).forEach((filterName) => {
      twingEnvironment.addFilter(
        new TwingFilter(filterName, filters[filterName]),
      );
    });

    const functions = require('../lib/functions/twing');
    Object.keys(functions).forEach((functionName) => {
      twingEnvironment.addFunction(
        new TwingFunction(functionName, functions[functionName]),
      );
    });
  },
};
