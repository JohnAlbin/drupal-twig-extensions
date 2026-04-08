import { createSynchronousFunction } from 'twing';

const newTwingFunction = (name, callable, options, acceptedArguments = []) =>
  createSynchronousFunction(
    name,
    (_executionContext, ...value) => {
      return callable(...value);
    },
    // @TODO File bug report; 3rd argument should be options.
    acceptedArguments,
    options,
  );

export default newTwingFunction;
