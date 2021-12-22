import test from 'ava';
import {
  setupTwigBefore,
  renderTemplateMacro,
} from '../../fixtures/twig-helpers.js';

test.before(setupTwigBefore);

test('should render with no arguments', renderTemplateMacro, {
  template: 'The path to my theme is {{ active_theme_path() }}!',
  expected: 'The path to my theme is !',
});

test('should render while ignoring arguments', renderTemplateMacro, {
  template:
    'The path to my theme is {{ active_theme_path("ignored argument") }}!',
  expected: 'The path to my theme is !',
});
