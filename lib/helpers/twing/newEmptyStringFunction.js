import newTwingFunction from './newTwingFunction.js';

const newEmptyStringFunction = (functionName, options = {}) =>
  newTwingFunction(
    functionName,
    async function () {
      return '';
    },
    options,
  );

export default newEmptyStringFunction;
