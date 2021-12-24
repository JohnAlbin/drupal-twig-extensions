import test from 'ava';
import { setupTwigBefore, renderTemplateMacro } from '#twig-fixture';

test.before(setupTwigBefore);

const template = '{{ "a string"|trans }}';

test(
  'should return the same string until the trans filter is implemented',
  renderTemplateMacro,
  {
    template,
    data: {},
    expected: 'a string',
  },
);
