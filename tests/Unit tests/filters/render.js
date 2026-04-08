import test from 'ava';
import { renderVar } from '../../../lib/filters/render/definition.js';

test('should throw an error given a Function', async (t) => {
  await t.throws(() => renderVar(() => {}), {
    message: 'A function cannot be printed.',
  });
});
