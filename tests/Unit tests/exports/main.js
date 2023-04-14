import test from 'ava';
import * as exports from '../../../index.cjs';

test('should have 1 named export', (t) => {
  // CJS files also include "default" and "__esModule" exports.
  t.is(Object.keys(exports).length - 2, 1);
});
