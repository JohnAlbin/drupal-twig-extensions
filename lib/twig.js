import filters from './filters/twig';
import functions from './functions/twig';

/**
 * Adds all the extensions to the given Twig instance.
 *
 * @param {Twig} twigInstance The instance of Twig to modify.
 */
export const addDrupalExtensions = function (twigInstance) {
  Object.keys(filters).forEach((filterName) => {
    const filter = filters[filterName];
    twigInstance.extendFilter(filterName, filter);
  });

  Object.keys(functions).forEach((functionName) => {
    const func = functions[functionName];
    twigInstance.extendFunction(functionName, func);
  });
};
