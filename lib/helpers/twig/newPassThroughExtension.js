import newTwigExtension from './newTwigExtension';

export default (extensionName, options = {}) =>
  newTwigExtension(
    extensionName,
    function (value) {
      return value;
    },
    options,
  );
