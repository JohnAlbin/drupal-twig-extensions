import twig from 'twig';
import { newTwigExtension } from '../../helpers/twig.js';
import { name, options } from './definition.js';

export const callable = twig.filters.escape;

export default newTwigExtension(name, callable, options);
