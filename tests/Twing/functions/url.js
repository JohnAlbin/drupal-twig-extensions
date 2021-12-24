import test from 'ava';
import { setupTwingBefore, renderTemplateMacro } from '#twing-fixture';

test.before(setupTwingBefore);

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
