import test from 'ava';
import { setupTwingBefore, renderTemplateMacro } from '#twing-fixture';

test.before(setupTwingBefore);

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
