import { TwingFilter } from 'twing';

const newTwingFilter = (name, callable, options, acceptedArguments = []) =>
  new TwingFilter(
    name,
    async function (...args) {
      return callable(...args);
    },
    // @TODO File bug report; 3rd argument should be options.
    acceptedArguments,
    options,
  );

export default newTwingFilter;
