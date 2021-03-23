const { TwingFilter, TwingFunction, TwingEnvironment } = require('twing');

/**
 * Adds all the extensions to the given Twing environment.
 *
 * @param {TwingEnvironment} twingEnvironment The Twing environment to modify.
 */
module.exports = function addToTwing(twingEnvironment) {
  const filters = require('./filters/twing');
  Object.keys(filters).forEach((filterName) => {
    twingEnvironment.addFilter(
      new TwingFilter(filterName, filters[filterName]),
    );
  });

  const functions = require('./functions/twing');
  Object.keys(functions).forEach((functionName) => {
    twingEnvironment.addFunction(
      new TwingFunction(functionName, functions[functionName]),
    );
  });
};
