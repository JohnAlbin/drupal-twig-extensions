import newTwingFilter from './newTwingFilter.js';

const newPassThroughFilter = (
  filterName,
  options = {},
  acceptedArguments = [],
) =>
  newTwingFilter(
    filterName,
    async function (value) {
      return value;
    },
    options,
    acceptedArguments,
  );

export default newPassThroughFilter;
