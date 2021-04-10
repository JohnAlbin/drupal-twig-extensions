import { TwingFilter } from 'twing';

export default (name, callable, options) =>
  new TwingFilter(
    name,
    async function (...args) {
      return callable(...args);
    },
    // @TODO File bug report; 3rd argument should be options.
    [],
    options,
  );
