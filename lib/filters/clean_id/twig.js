import { newTwigExtension } from '../../helpers/twig.js';
import { name, options, acceptedArguments, cleanID } from './definition.js';

export const callable = cleanID;

export default newTwigExtension(name, callable, options, acceptedArguments);
