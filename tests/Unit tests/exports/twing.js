import test from 'ava';
import * as exports from '../../../twing.cjs';

test('should have 2 named exports', (t) => {
  // Babel-transpiled CJS files also include "default" and "__esModule" exports.
  t.is(Object.keys(exports).length - 2, 2);
});

test('should export addDrupalExtensions', (t) => {
  t.truthy(typeof exports.addDrupalExtensions === 'function');
});

test('should export Attribute', (t) => {
  t.truthy(typeof exports.Attribute === 'function');
});
