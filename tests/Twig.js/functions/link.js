import test from 'ava';
import {
  setupTwigBefore,
  renderTemplateMacro,
} from '../../fixtures/twig-helpers.js';

test.before(setupTwigBefore);

test('should render with title and url arguments', renderTemplateMacro, {
  template: 'Visit my {{ link(text, url) }}!',
  data: {
    text: 'Website',
    url: 'http://example.com',
  },
  expected: 'Visit my <a href="http://example.com">Website</a>!',
});

test('should render with an attributes argument', renderTemplateMacro, {
  template: 'Visit my {{ link(text, url, attributes) }}!',
  data: {
    text: 'Site',
    url: 'http://example.com',
    attributes: {
      id: 'example',
      class: 'awesome',
    },
  },
  expected:
    'Visit my <a href="http://example.com" id="example" class="awesome">Site</a>!',
});

test('should render with undefined attributes argument', renderTemplateMacro, {
  template: 'Visit my {{ link(text, url, attributes) }}!',
  data: {
    text: 'Website',
    url: 'http://example.com',
  },
  expected: 'Visit my <a href="http://example.com">Website</a>!',
});
