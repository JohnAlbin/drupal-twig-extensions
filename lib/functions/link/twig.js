import { newTwigExtension } from '../../helpers/twig.js';
import { name, options, acceptedArguments, link } from './definition.js';

export const callable = link;

export default newTwigExtension(name, callable, options, acceptedArguments);
