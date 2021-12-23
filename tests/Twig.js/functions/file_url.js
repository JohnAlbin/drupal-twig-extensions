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
  'should convert the public uri to a relative path',
  renderTemplateMacro,
  {
    template,
    data,
    expected: '<a href="/sites/default/files/file-path.txt">download file</a>',
  },
);
