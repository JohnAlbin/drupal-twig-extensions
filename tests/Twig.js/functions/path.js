import test from 'ava';
import { setupTwigBefore, renderTemplateMacro } from '#twig-fixture';

test.before(setupTwigBefore);

const template = '{{ path("view.frontpage.page_1") }}';

test(
  'should return the same string until the path function is implemented',
  renderTemplateMacro,
  {
    template,
    data: {},
    expected: 'view.frontpage.page_1',
  },
);
