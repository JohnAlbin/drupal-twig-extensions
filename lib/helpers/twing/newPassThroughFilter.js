import newTwingFilter from './newTwingFilter';

export default (filterName, options = {}) =>
  newTwingFilter(
    filterName,
    async function (value) {
      return value;
    },
    options,
  );
