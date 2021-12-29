import newTwingFunction from './newTwingFunction.js';

const newEmptyStringFunction = (
  functionName,
  options = {},
  acceptedArguments = [],
) =>
  newTwingFunction(
    functionName,
    async function () {
      return '';
    },
    options,
    acceptedArguments,
  );

export default newEmptyStringFunction;
