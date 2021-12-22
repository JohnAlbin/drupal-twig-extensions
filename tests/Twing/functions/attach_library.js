import test from 'ava';
import { setupTwingBefore, renderTemplateMacro } from '#twing-fixture';

test.before(setupTwingBefore);

test('should render to an empty string', renderTemplateMacro, {
  template:
    'This function {{ attach_library("ignored/library") }} does not break rendering!',
  expected: 'This function  does not break rendering!',
});
