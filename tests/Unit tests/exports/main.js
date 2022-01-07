import test from 'ava';
import DrupalAttribute from 'drupal-attribute';
import * as exports from '../../../index.cjs';

test('should have 1 named export', (t) => {
  // Babel-transpiled CJS files also include "default" and "__esModule" exports.
  t.is(Object.keys(exports).length - 2, 1);
});

test('should export drupal-attribute as Attribute', (t) => {
  t.deepEqual(exports.Attribute, DrupalAttribute);
});
