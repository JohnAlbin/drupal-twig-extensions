const { Twig } = require('twig');

/**
 * Adds all the extensions to the given Twig instance.
 *
 * @param {Twig} twigInstance The instance of Twig to modify.
 */
module.exports = function addToTwig(twigInstance) {
  const filters = require('./filters/twig');
  Object.keys(filters).forEach((filterName) => {
    const filter = filters[filterName];
    twigInstance.extendFilter(filterName, filter);
  });

  const functions = require('./functions/twig');
  Object.keys(functions).forEach((functionName) => {
    const func = functions[functionName];
    twigInstance.extendFunction(functionName, func);
  });
};
