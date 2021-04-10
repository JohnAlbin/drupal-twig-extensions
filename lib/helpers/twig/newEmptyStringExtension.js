import newTwigExtension from './newTwigExtension';

export default (extensionName, options = {}) =>
  newTwigExtension(
    extensionName,
    function () {
      return '';
    },
    options,
  );
