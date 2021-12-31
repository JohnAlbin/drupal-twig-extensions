import test from 'ava';
import { setupTwigBefore, renderTemplateMacro } from '#twig-fixture';

test.before(setupTwigBefore);

const template = '{{ render_var(scalar) }}';

test('should return an empty string given null', renderTemplateMacro, {
  template,
  data: {
    scalar: null,
  },
  expected: '',
});

test('should return an empty string given undefined', renderTemplateMacro, {
  template,
  data: {
    scalar: undefined,
  },
  expected: '',
});

test('should return an empty string given boolean false', renderTemplateMacro, {
  template,
  data: {
    scalar: false,
  },
  expected: '',
});

test('should return a "1" given boolean true', renderTemplateMacro, {
  template,
  data: {
    scalar: true,
  },
  expected: '1',
});

test('should return a string given a number', renderTemplateMacro, {
  template,
  data: {
    scalar: 0.25,
  },
  expected: '0.25',
});

test('should return a string given a BigInt', renderTemplateMacro, {
  template,
  data: {
    scalar: BigInt(1000000000),
  },
  expected: '1000000000',
});

test('should return the description given a Symbol', renderTemplateMacro, {
  template,
  data: {
    scalar: Symbol('the Symbol description'),
  },
  expected: 'the Symbol description',
});
