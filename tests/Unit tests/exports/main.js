import test from 'ava';
import DrupalAttribute from 'drupal-attribute';
import * as exports from '../../../index.js';

test('should have 1 named export', (t) => {
  t.is(Object.keys(exports).length, 1);
});

test('should export drupal-attribute as Attribute', (t) => {
  t.deepEqual(exports.Attribute, DrupalAttribute);
});
