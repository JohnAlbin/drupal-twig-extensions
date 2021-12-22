import test from 'ava';
import {
  setupTwigBefore,
  renderTemplateMacro,
} from '../../fixtures/twig-helpers.js';

test.before(setupTwigBefore);

test('should render with no arguments', renderTemplateMacro, {
  template: 'This is my {{ active_theme() }}!',
  expected: 'This is my !',
});

test('should render while ignoring arguments', renderTemplateMacro, {
  template: 'This is my {{ active_theme("ignored argument") }}!',
  expected: 'This is my !',
});
