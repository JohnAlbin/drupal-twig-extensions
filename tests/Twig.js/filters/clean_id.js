import test from 'ava';
import { setupTwigBefore, renderTemplateMacro } from '#twig-fixture';

test.before(setupTwigBefore);

const template = '{{ id|clean_id }}';

test('should return an empty string given invalid input', renderTemplateMacro, {
  template,
  data: { id: null },
  expected: '',
});

test(
  'should not strip letters, digits, and hyphens from the ID',
  renderTemplateMacro,
  {
    template,
    data: { id: 'abcdefghijklmnopqrstuvwxyz-0123456789' },
    expected: 'abcdefghijklmnopqrstuvwxyz-0123456789',
  },
);

test('should strip invalid characters from the ID', renderTemplateMacro, {
  template,
  data: { id: 'invalid,./:@\\^`{Üidentifier' },
  expected: 'invalididentifier',
});

test('should enforce Drupal coding standards', renderTemplateMacro, {
  template,
  data: { id: 'ID NAME_[1]' },
  expected: 'id-name-1',
});
