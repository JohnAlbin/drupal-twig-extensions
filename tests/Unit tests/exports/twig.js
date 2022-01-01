import test from 'ava';
import * as exports from '../../../twig.js';
import { addDrupalExtensions, Attribute } from '../../../lib/twig.js';

test('should have 2 named exports', (t) => {
  t.is(Object.keys(exports).length, 2);
});

test('should export addDrupalExtensions', (t) => {
  t.deepEqual(exports.addDrupalExtensions, addDrupalExtensions);
});

test('should export Attribute', (t) => {
  t.deepEqual(exports.Attribute, Attribute);
});
