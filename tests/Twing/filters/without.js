import test from 'ava';
import {
  setupTwingBefore,
  renderTemplateMacro,
} from '../../fixtures/twing-helpers.js';
import Attribute from 'drupal-attribute';

test.before(setupTwingBefore);

const data = {
  quote: {
    content:
      'You can only find truth with logic if you have already found truth without it.',
    author: 'Gilbert Keith Chesterton',
    date: '1874-1936',
  },
};

test('should remove the given element from an object', renderTemplateMacro, {
  template: 'Keys without author: {{ quote|without("author")|keys }}',
  data,
  expected: 'Keys without author: content,date',
});

test('should remove multiple elements from an object', renderTemplateMacro, {
  template:
    'Keys without content, date: {{ quote|without("content", "date")|keys }}',
  data,
  expected: 'Keys without content, date: author',
});

test('should handle arrays of elements to exclude', renderTemplateMacro, {
  template:
    'Keys without content, date: {{ quote|without(["content", "date"])|keys }}',
  data,
  expected: 'Keys without content, date: author',
});

test('should handle an undefined input', renderTemplateMacro, {
  template: 'No input: {{ nothing|without("content", "date")|join }}',
  data,
  expected: 'No input: ',
});

// @TODO Test is failing because Twing is not handling Attribute properly.
test.failing('should do a deep clone of the element', renderTemplateMacro, {
  template:
    '{%set copy = element|without("remove") %}<div{{ element.attributes.addClass("class2") }}><div{{ copy.attributes }}>',
  data: {
    element: {
      remove: 'value',
      attributes: new Attribute([['class', ['class1']]]),
    },
  },
  expected: '<div class="class1 class2"><div class="class1">',
});
