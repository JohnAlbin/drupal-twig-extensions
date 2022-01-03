// Use shared state object between CommonJS and ES Module versions of the code.
// @see https://nodejs.org/api/packages.html#approach-2-isolate-state
import { state } from '../state.cjs';

export default state;
