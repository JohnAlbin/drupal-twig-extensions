import { TwingFunction } from 'twing';

export default (name, callable, options) =>
  new TwingFunction(
    name,
    async function (...args) {
      return callable(...args);
    },
    // @TODO File bug report; 3rd argument should be options.
    [],
    options,
  );
