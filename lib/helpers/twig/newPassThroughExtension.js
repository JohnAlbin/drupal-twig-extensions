import newTwigExtension from './newTwigExtension.js';

const newPassThroughExtension = (
  extensionName,
  options = {},
  acceptedArguments = [],
) =>
  newTwigExtension(
    extensionName,
    function (value) {
      return value;
    },
    options,
    acceptedArguments,
  );

export default newPassThroughExtension;
