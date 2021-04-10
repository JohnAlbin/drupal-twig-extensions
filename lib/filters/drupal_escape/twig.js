import twig from 'twig';

export default function () {
  return Reflect.apply(twig.filters.escape, null, arguments);
}
