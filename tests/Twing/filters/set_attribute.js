import test from 'ava';
import { setupTwingBefore, renderTemplateMacro } from '#twing-fixture';

test.before(setupTwingBefore);

const template = `{{ content|set_attribute('role', "xxx") }}`;

test('set attribute to simple content', renderTemplateMacro, {
  template,
  data: {
    content: 'Inner content',
  },
  expected: '<div role="xxx">Inner content</div>',
});
