import { createSynchronousFilter } from 'twing';

const newTwingFilter = (name, callable, options, acceptedArguments = []) =>
  createSynchronousFilter(
    name,
    (_executionContext, ...value) => {
      return callable(...value);
    },
    // @TODO File bug report; 3rd argument should be options.
    acceptedArguments,
    options,
  );

export default newTwingFilter;
