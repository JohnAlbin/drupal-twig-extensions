import test from 'ava';
import config from '../../../lib/config/twing.js';
import { setupTwingBefore, renderTemplateMacro } from '#twing-fixture';

test.before(setupTwingBefore);

const template = '{{ class|clean_class }}';

test(
  'should not strip valid ASCII characters from the identifier',
  renderTemplateMacro,
  {
    template,
    data: {
      class: 'abcdefghijklmnopqrstuvwxyz_ABCDEFGHIJKLMNOPQRSTUVWXYZ-0123456789',
    },
    expected:
      'abcdefghijklmnopqrstuvwxyz-abcdefghijklmnopqrstuvwxyz-0123456789',
  },
);

test(
  'should not strip valid UTF-8 characters from the identifier',
  renderTemplateMacro,
  {
    template,
    data: {
      class: '¡¢£¤¥',
    },
    expected: '¡¢£¤¥',
  },
);

test(
  'should not strip double underscores from the identifier',
  renderTemplateMacro,
  {
    template,
    data: { class: 'css__identifier__with__double__underscores' },
    expected: 'css__identifier__with__double__underscores',
  },
);

test(
  'should strip invalid characters (including non-breaking space) from the identifier',
  renderTemplateMacro,
  {
    template,
    data: {
      class: 'invalid !"#$%&\'()*+,./:;<=>?@[\\]^`{|}~ identifier',
    },
    expected: 'invalid---identifier',
  },
);

test(
  'should replace an identifier starting with a digit',
  renderTemplateMacro,
  {
    template,
    data: { class: '1cssidentifier' },
    expected: '_cssidentifier',
  },
);

test(
  'should replace an identifier starting with a hyphen followed by a digit',
  renderTemplateMacro,
  {
    template,
    data: { class: '-1cssidentifier' },
    expected: '__cssidentifier',
  },
);

test(
  'should replace an identifier starting with two hyphens',
  renderTemplateMacro,
  {
    template,
    data: { class: '--cssidentifier' },
    expected: '__cssidentifier',
  },
);

test('should enforce Drupal coding standards', renderTemplateMacro, {
  template,
  data: { class: 'CLASS NAME_[Ü]' },
  expected: 'class-name--ü',
});

test('should cache results', async (t) => {
  t.plan(2);

  const template = '{{ class|clean_class }}';
  const data = { class: 'UNCACHED CLASS NAME' };
  const expected = 'pre-cached-class-name';

  // No existing cache.
  t.deepEqual(config.cleanClassCache[data.class], undefined);

  // Cache a value that can't be created using clean_class.
  config.cleanClassCache[data.class] = expected;

  await renderTemplateMacro.exec(t, {
    template,
    data,
    expected,
  });
});
