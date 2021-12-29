import { newTwigExtension } from '../../helpers/twig.js';
import { name, callable, options, acceptedArguments } from './definition.js';

export default newTwigExtension(name, callable, options, acceptedArguments);
