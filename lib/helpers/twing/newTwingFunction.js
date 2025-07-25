import { createFunction } from 'twing';

const newTwingFunction = (name, callable, options, acceptedArguments = []) =>
  createFunction(
    name,
    (_executionContext, ...value) => {
      return Promise.resolve(callable(...value));
    },
    // @TODO File bug report; 3rd argument should be options.
    acceptedArguments,
    options,
  );

export default newTwingFunction;
