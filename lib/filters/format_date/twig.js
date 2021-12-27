import { newTwigExtension } from '../../helpers/twig.js';
import { name, options, acceptedArguments, formatDate } from './definition.js';

const callable = function (timestamp, args) {
  const type = args[0];
  const format = args[1];
  const timezone = args[2];
  const langcode = args[3];

  return formatDate(timestamp, type, format, timezone, langcode);
};

export default newTwigExtension(name, callable, options, acceptedArguments);
