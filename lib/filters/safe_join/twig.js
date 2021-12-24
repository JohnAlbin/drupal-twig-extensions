import twig from 'twig';
import { newTwigExtension } from '../../helpers/twig.js';
import { name, options } from './definition.js';

export default newTwigExtension(
  name,
  function () {
    return Reflect.apply(twig.filters.join, null, arguments);
  },
  options,
);
