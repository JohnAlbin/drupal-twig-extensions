import newTwingFunction from './newTwingFunction.js';

const newPassThroughFunction = (functionName, options = {}) =>
  newTwingFunction(
    functionName,
    async function (value) {
      return value;
    },
    options,
  );

export default newPassThroughFunction;
