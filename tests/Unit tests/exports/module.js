import test from 'ava';
import * as exports from '#module';

test('should have 1 named export', (t) => {
  t.is(Object.keys(exports).length, 1);
});
