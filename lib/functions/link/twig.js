import { newTwigExtension } from '../../helpers/twig.js';
import { name, callable, options } from './definition.js';

export default newTwigExtension(name, callable, options);
