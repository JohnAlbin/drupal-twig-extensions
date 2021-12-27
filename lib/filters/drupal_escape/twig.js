import twig from 'twig';
import { newTwigExtension } from '../../helpers/twig.js';
import { name, options, acceptedArguments } from './definition.js';

export const callable = twig.filters.escape;

export default newTwigExtension(name, callable, options, acceptedArguments);
