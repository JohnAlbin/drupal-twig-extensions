import { TwingFunction } from 'twing';

const newTwingFunction = (name, callable, options, acceptedArguments = []) =>
  new TwingFunction(
    name,
    callable,
    // @TODO File bug report; 3rd argument should be options.
    acceptedArguments,
    options,
  );

export default newTwingFunction;
