import newTwigExtension from './newTwigExtension.js';

const newEmptyStringExtension = (
  extensionName,
  options = {},
  acceptedArguments = [],
) =>
  newTwigExtension(
    extensionName,
    function () {
      return '';
    },
    options,
    acceptedArguments,
  );

export default newEmptyStringExtension;
