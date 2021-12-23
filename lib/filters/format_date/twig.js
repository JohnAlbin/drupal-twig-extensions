import { name, options } from './definition.js';
import { newTwigExtension } from '../../helpers/twig.js';
import date from 'locutus/php/datetime/date.js';

const callable = function (timestamp, args) {
  const format = args[0];
  return date(format, timestamp);
};

export default newTwigExtension(name, callable, options);
