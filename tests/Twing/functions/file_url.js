import test from 'ava';
import {
  setupTwingBefore,
  renderTemplateMacro,
  renderWithConfigMacro,
} from '#twing-fixture';

test.before(setupTwingBefore);

const template = '<a href="{{ file_url(uri.value) }}">download file</a>';

const data = {
  uri: { value: 'public://file-path.txt' },
};

test.serial(
  'should convert the public stream wrapper to a path',
  renderTemplateMacro,
  {
    template,
    data,
    expected: '<a href="/sites/default/files/file-path.txt">download file</a>',
  },
);

test.serial(
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

test.serial(
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

test.serial(
  'should pass through root-relative and protocol-relative paths',
  renderTemplateMacro,
  {
    template,
    data: {
      uri: { value: '//example.com/file-path.txt' },
    },
    expected: '<a href="//example.com/file-path.txt">download file</a>',
  },
);

test.serial('should pass through absolute paths', renderTemplateMacro, {
  template,
  data: {
    uri: { value: 'https://example.com/file-path.txt' },
  },
  expected: '<a href="https://example.com/file-path.txt">download file</a>',
});

test.serial('should the base_url added from config', renderWithConfigMacro, {
  baseUrl: '/myBaseUrl/',
  template,
  data,
  expected:
    '<a href="/myBaseUrl/sites/default/files/file-path.txt">download file</a>',
});

test.serial(
  'should append a slash to the base_url added from config',
  renderWithConfigMacro,
  {
    baseUrl: '/myBaseUrl',
    template,
    data,
    expected:
      '<a href="/myBaseUrl/sites/default/files/file-path.txt">download file</a>',
  },
);

test.serial(
  'should override the public streamWrapper when added from config',
  renderWithConfigMacro,
  {
    schemeName: 'public://',
    schemePath: 'sites/mySite/files',
    template,
    data,
    expected: '<a href="/sites/mySite/files/file-path.txt">download file</a>',
  },
);

test.serial(
  'should use a custom streamWrapper when added from config',
  renderWithConfigMacro,
  {
    schemeName: 'custom://',
    schemePath: 'sites/custom/files',
    template,
    data: {
      uri: { value: 'custom://file-path.txt' },
    },
    expected: '<a href="/sites/custom/files/file-path.txt">download file</a>',
  },
);
