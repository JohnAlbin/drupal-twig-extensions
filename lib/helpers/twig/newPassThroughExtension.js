import newTwigExtension from './newTwigExtension.js';

const newPassThroughExtension = (extensionName, options = {}) =>
  newTwigExtension(
    extensionName,
    function (value) {
      return value;
    },
    options,
  );

export default newPassThroughExtension;
