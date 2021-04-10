import newTwingFunction from './newTwingFunction';

export default (functionName, options = {}) =>
  newTwingFunction(
    functionName,
    async function () {
      return '';
    },
    options,
  );
