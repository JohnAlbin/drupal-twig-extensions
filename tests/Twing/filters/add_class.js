import test from 'ava';
import { setupTwingBefore, renderTemplateMacro } from '#twing-fixture';

test.before(setupTwingBefore);

const template = `{{ content|add_class("sample-class") }}`;

test('Add class to simple content', renderTemplateMacro, {
  template,
  data: {
    content: 'Inner content',
  },
  expected: '<div class="sample-class">Inner content</div>',
});

test('Add class to content array', renderTemplateMacro, {
  template,
  data: {
    content: ['Inner content', 'Inner content2'],
  },
  expected:
    '<div class="sample-class">Inner content</div> <div class="sample-class">Inner content2</div>',
});

test('Add array class to simple content', renderTemplateMacro, {
  template: `{{ content|add_class(["sample-class" , "sample-class2"]) }}`,
  data: {
    content: 'Inner content',
  },
  expected: '<div class="sample-class sample-class2">Inner content</div>',
});
