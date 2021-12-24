import newTwingFilter from './newTwingFilter.js';

const newPassThroughFilter = (filterName, options = {}) =>
  newTwingFilter(
    filterName,
    async function (value) {
      return value;
    },
    options,
  );

export default newPassThroughFilter;
