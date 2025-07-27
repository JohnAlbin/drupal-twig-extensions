import newTwingFunction from './newTwingFunction.js';

const newEmptyStringFunction = (
  functionName,
  options = {},
  acceptedArguments = [],
) =>
  newTwingFunction(
    functionName,
    function () {
      return '';
    },
    options,
    acceptedArguments,
  );

export default newEmptyStringFunction;
