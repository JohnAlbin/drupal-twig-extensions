import newTwigExtension from './newTwigExtension.js';

const newEmptyStringExtension = (extensionName, options = {}) =>
  newTwigExtension(
    extensionName,
    function () {
      return '';
    },
    options,
  );

export default newEmptyStringExtension;
