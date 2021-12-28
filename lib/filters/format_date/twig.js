import { newTwigExtension } from '../../helpers/twig.js';
import config from '../../config/twig.js';
import { name, options, acceptedArguments, formatDate } from './definition.js';

export function callable(timestamp, args) {
  const type = args[0];
  const format = args[1];
  const timezone = args[2];
  const langcode = args[3];

  return formatDate(config, timestamp, type, format, timezone, langcode);
}

export default newTwigExtension(name, callable, options, acceptedArguments);
