import { newTwigExtension } from '../../helpers/twig.js';
import { name, options, acceptedArguments, callable } from './definition.js';

export default newTwigExtension(name, callable, options, acceptedArguments);
