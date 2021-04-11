import test from 'ava';
import {
  setupTwingBefore,
  renderTemplateMacro,
} from '../../fixtures/twing-helpers';

test.before(setupTwingBefore);

test('should render with no arguments', renderTemplateMacro, {
  template: 'My theme is {{ active_theme() }}!',
  expected: 'My theme is !',
});

test('should render while ignoring arguments', renderTemplateMacro, {
  template: 'My theme is {{ active_theme("ignored argument") }}!',
  expected: 'My theme is !',
});
