import { newTwingFilter } from '../../helpers/twing.js';
import config from '../../config.js';
import { name, options, acceptedArguments, formatDate } from './definition.js';

export async function callable(timestamp, type, format, timezone, langcode) {
  return formatDate(config, timestamp, type, format, timezone, langcode);
}

export default newTwingFilter(name, callable, options, acceptedArguments);
