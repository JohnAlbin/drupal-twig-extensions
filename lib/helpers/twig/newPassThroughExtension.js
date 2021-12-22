import newTwigExtension from './newTwigExtension.js';

export default (extensionName, options = {}) =>
  newTwigExtension(
    extensionName,
    function (value) {
      return value;
    },
    options,
  );
