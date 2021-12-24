import date from 'locutus/php/datetime/date.js';
import { newTwigExtension } from '../../helpers/twig.js';
import { name, options } from './definition.js';

const callable = function (timestamp, args) {
  const format = args[0];
  return date(format, timestamp);
};

export default newTwigExtension(name, callable, options);
