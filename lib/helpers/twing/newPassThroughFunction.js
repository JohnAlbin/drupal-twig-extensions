import newTwingFunction from './newTwingFunction';

export default (functionName, options = {}) =>
  newTwingFunction(
    functionName,
    async function (value) {
      return value;
    },
    options,
  );
