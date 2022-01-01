import { join } from 'twing/dist/cjs/lib/extension/core/filters/join.js';
import { isTraversable } from 'twing/dist/cjs/lib/helpers/is-traversable.js';
import { newTwingFilter } from '../../helpers/twing.js';
import { name, options, acceptedArguments } from './definition.js';

export async function callable(value, glue) {
  // Twing's join() doesn't join Object values like it should. Issue #44
  // @see https://gitlab.com/nightlycommit/twing/-/issues/544
  // @see https://github.com/JohnAlbin/drupal-twig-extensions/issues/45
  const newValue =
    typeof value === 'object' && !isTraversable(value)
      ? Object.values(value)
      : value;
  return join(newValue, glue);
}

export default newTwingFilter(name, callable, options, acceptedArguments);
