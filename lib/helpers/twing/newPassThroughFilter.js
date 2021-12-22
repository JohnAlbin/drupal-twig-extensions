import newTwingFilter from './newTwingFilter.js';

export default (filterName, options = {}) =>
  newTwingFilter(
    filterName,
    async function (value) {
      return value;
    },
    options,
  );
