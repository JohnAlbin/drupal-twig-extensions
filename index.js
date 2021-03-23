/**
 * Adds all the extensions to the given Twig implementation.
 *
 * @param {Twig} twigImplementation The implementation of Twig to modify.
 */
module.exports = function (twigImplementation) {
  if (typeof twigImplementation.extendFilter === 'function') {
    const addToTwig = require('./lib/addToTwig');
    addToTwig(twigImplementation);
  } else {
    const addToTwing = require('./lib/addToTwing');
    addToTwing(twigImplementation);
  }
};
