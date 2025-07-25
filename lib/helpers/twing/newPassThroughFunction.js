import newTwingFunction from './newTwingFunction.js';

const newPassThroughFunction = (
  functionName,
  options = {},
  acceptedArguments = [],
) =>
  newTwingFunction(
    functionName,
    function (value) {
      return value;
    },
    options,
    acceptedArguments,
  );

export default newPassThroughFunction;
