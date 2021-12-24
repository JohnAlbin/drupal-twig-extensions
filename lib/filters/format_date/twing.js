import date from 'locutus/php/datetime/date.js';
import { newTwingFilter } from '../../helpers/twing.js';
import { name, options } from './definition.js';

const callable = function (timestamp, format) {
  return date(format, timestamp);
};

export default newTwingFilter(name, callable, options);
