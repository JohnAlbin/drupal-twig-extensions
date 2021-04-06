/**
 * Adds all the extensions to the given Twig instance.
 *
 * @param {Twig} twigInstance The instance of Twig to modify.
 */
module.exports = {
  addDrupalExtensions: function (twigInstance) {
    const filters = require('../lib/filters/twig');
    Object.keys(filters).forEach((filterName) => {
      const filter = filters[filterName];
      twigInstance.extendFilter(filterName, filter);
    });

    const functions = require('../lib/functions/twig');
    Object.keys(functions).forEach((functionName) => {
      const func = functions[functionName];
      twigInstance.extendFunction(functionName, func);
    });
  },
};
