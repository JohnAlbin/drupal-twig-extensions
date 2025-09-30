import test from 'ava';
import { setupTwingBefore, renderTemplateMacro } from '#twing-fixture';

test.before(setupTwingBefore);

const template = '{{ value|add_class("sample-class") }}';

test(
  'should not strip valid ASCII characters from the identifier',
  renderTemplateMacro,
  {
    template,
    data: {
      value: 'Inner content',
    },
    expected: '<div class="sample-class">Inner content</div>',
  },
);
