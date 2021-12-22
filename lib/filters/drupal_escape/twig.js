import twig from 'twig';
import { name, options } from './definition.js';
import { newTwigExtension } from '../../helpers/twig.js';

export default newTwigExtension(
  name,
  function () {
    return Reflect.apply(twig.filters.escape, null, arguments);
  },
  options,
);
