import test from 'ava';
import {
  setupTwigBefore,
  renderTemplateMacro,
} from '../../fixtures/twig-helpers.js';

test.before(setupTwigBefore);

const template = '{{ string|drupal_escape }}';

test('should escape ampersands in a string', renderTemplateMacro, {
  template,
  data: { string: 'Bonnie & Clyde & Luna' },
  expected: 'Bonnie &amp; Clyde &amp; Luna',
});

test('should escape double quotes in a string', renderTemplateMacro, {
  template,
  data: { string: '"Bonnie and Clyde"' },
  expected: '&quot;Bonnie and Clyde&quot;',
});

test('should escape single quotes in a string', renderTemplateMacro, {
  template,
  data: { string: "'Bonnie and Clyde'" },
  expected: '&#039;Bonnie and Clyde&#039;',
});

test('should escape html elements in a string', renderTemplateMacro, {
  template,
  data: { string: '<p>Bonnie and Clyde</p>' },
  expected: '&lt;p&gt;Bonnie and Clyde&lt;/p&gt;',
});
