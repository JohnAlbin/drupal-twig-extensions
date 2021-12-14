import test from 'ava';
import {
  setupTwigBefore,
  renderTemplateMacro,
} from '../../fixtures/twig-helpers';

test.before(setupTwigBefore);

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
  template: 'No input: {{ nothing|without("content", "date")|keys }}',
  data,
  expected: 'No input: ',
});
