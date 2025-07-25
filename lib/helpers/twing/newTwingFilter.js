import { createFilter } from 'twing';

const newTwingFilter = (name, callable, options, acceptedArguments = []) =>
  createFilter(
    name,
    (_executionContext, ...value) => {
      return Promise.resolve(callable(...value));
    },
    // @TODO File bug report; 3rd argument should be options.
    acceptedArguments,
    options,
  );

export default newTwingFilter;
