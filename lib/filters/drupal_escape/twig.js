import twig from 'twig';
import { name, options } from './definition';
import { newTwigExtension } from '../../helpers/twig';

export default newTwigExtension(
  name,
  function () {
    return Reflect.apply(twig.filters.escape, null, arguments);
  },
  options,
);
