import test from 'ava';
import { setupTwigBefore, renderTemplateMacro } from '#twig-fixture';

test.before(setupTwigBefore);

const template = '{{ "a string"|t }}';

test(
  'should return the same string until the t filter is implemented',
  renderTemplateMacro,
  {
    template,
    data: {},
    expected: 'a string',
  },
);
