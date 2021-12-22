import newTwingFunction from './newTwingFunction.js';

export default (functionName, options = {}) =>
  newTwingFunction(
    functionName,
    async function () {
      return '';
    },
    options,
  );
