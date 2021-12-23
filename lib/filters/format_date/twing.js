import { name, options } from './definition.js';
import { newTwingFilter } from '../../helpers/twing.js';
import date from 'locutus/php/datetime/date.js';

const callable = function (timestamp, format) {
  return date(format, timestamp);
};

export default newTwingFilter(name, callable, options);
