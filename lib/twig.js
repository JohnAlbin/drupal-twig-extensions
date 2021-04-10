import filters from './filters/twig';
import functions from './functions/twig';

/**
 * Adds all the extensions to the given Twig instance.
 *
 * @param {Twig} twigInstance The instance of Twig to modify.
 */
export const addDrupalExtensions = function (twigInstance) {
  filters.forEach((filterArguments) => {
    twigInstance.extendFilter(...filterArguments);
  });

  functions.forEach((functionArguments) => {
    twigInstance.extendFunction(...functionArguments);
  });
};

export { Attribute } from './Attribute';
