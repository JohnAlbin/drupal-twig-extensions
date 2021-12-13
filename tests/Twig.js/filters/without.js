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
  template: 'No author: {{ quote|without("author")|join }}',
  data,
  expected:
    'No author: You can only find truth with logic if you have already found truth without it.1874-1936',
});

test('should remove multiple elements from an object', renderTemplateMacro, {
  template: 'Just author: {{ quote|without("content", "date")|join }}',
  data,
  expected: 'Just author: Gilbert Keith Chesterton',
});

test('should handle arrays of elements to exclude', renderTemplateMacro, {
  template: 'Just author: {{ quote|without(["content", "date"])|join }}',
  data,
  expected: 'Just author: Gilbert Keith Chesterton',
});

test('should handle an undefined input', renderTemplateMacro, {
  template: 'No input: {{ nothing|without("content", "date")|join }}',
  data,
  expected: 'No input: ',
});
