import { newTwigExtension } from '../../helpers/twig.js';
import { name, options, acceptedArguments, renderVar } from './definition.js';

export const callable = renderVar;

export default newTwigExtension(name, callable, options, acceptedArguments);
