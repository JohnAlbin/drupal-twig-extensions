const twigLink = require('../twig/link');

module.exports = function (title, url, attributes) {
  return Promise.resolve(twigLink(title, url, attributes));
};
