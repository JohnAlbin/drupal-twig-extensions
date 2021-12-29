import { TwingFilter } from 'twing';

const newTwingFilter = (name, callable, options, acceptedArguments = []) =>
  new TwingFilter(
    name,
    callable,
    // @TODO File bug report; 3rd argument should be options.
    acceptedArguments,
    options,
  );

export default newTwingFilter;
