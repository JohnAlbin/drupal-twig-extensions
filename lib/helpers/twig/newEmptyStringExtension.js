import newTwigExtension from './newTwigExtension.js';

export default (extensionName, options = {}) =>
  newTwigExtension(
    extensionName,
    function () {
      return '';
    },
    options,
  );
