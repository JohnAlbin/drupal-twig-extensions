import test from 'ava';
import { setupTwigBefore, renderTemplateMacro } from '#twig-fixture';

test.before(setupTwigBefore);

const template = '{{ string|placeholder }}';

test('should wrap the string in an em element', renderTemplateMacro, {
  template,
  data: {
    string: 'The placeholder text',
  },
  expected: '<em class="placeholder">The placeholder text</em>',
});

test('should escape the given string', renderTemplateMacro, {
  template,
  data: {
    string: 'The "<b>placeholder</b>" text',
  },
  expected:
    '<em class="placeholder">The &quot;&lt;b&gt;placeholder&lt;/b&gt;&quot; text</em>',
});

test('should not wrap an empty string', renderTemplateMacro, {
  template,
  data: {
    string: '',
  },
  expected: '',
});
