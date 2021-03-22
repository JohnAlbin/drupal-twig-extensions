/**
 * Adds all the extensions to the given Twig implementation.
 *
 * @param {Twig} twigImplementation The implementation of Twig to modify.
 */
module.exports = function (twigImplementation) {
  const addToTwig = require('./lib/addToTwig');
  addToTwig(twigImplementation);
};
