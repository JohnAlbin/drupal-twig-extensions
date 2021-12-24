import test from 'ava';
import { setupTwigBefore, renderTemplateMacro } from '#twig-fixture';

test.before(setupTwigBefore);

const template = '{{ url("view.frontpage.page_1") }}';

test(
  'should return the same string until the url function is implemented',
  renderTemplateMacro,
  {
    template,
    data: {},
    expected: 'view.frontpage.page_1',
  },
);
