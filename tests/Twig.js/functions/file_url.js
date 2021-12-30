import test from 'ava';
import { setupTwigBefore, renderTemplateMacro } from '#twig-fixture';

test.before(setupTwigBefore);

const template = '<a href="{{ file_url(uri.value) }}">download file</a>';

const data = {
  uri: { value: 'public://file-path.txt' },
};

test(
  'should return the given string until file_url() is implemented',
  renderTemplateMacro,
  {
    template,
    data,
    expected: '<a href="public://file-path.txt">download file</a>',
  },
);

test.failing(
  'should convert the public stream wrapper to a path',
  renderTemplateMacro,
  {
    template,
    data,
    expected: '<a href="/sites/default/files/file-path.txt">download file</a>',
  },
);

test.failing(
  'should convert the private stream wrapper to a path',
  renderTemplateMacro,
  {
    template,
    data: {
      uri: { value: 'private://file-path.txt' },
    },
    expected:
      '<a href="/sites/default/private/file-path.txt">download file</a>',
  },
);

test.failing(
  'should convert the temporary stream wrapper to a path',
  renderTemplateMacro,
  {
    template,
    data: {
      uri: { value: 'temporary://file-path.txt' },
    },
    expected: '<a href="/sites/default/tmp/file-path.txt">download file</a>',
  },
);
