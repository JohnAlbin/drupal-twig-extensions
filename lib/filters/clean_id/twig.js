import { name, callable, options } from './definition.js';
import { newTwigExtension } from '../../helpers/twig.js';

export default newTwigExtension(name, callable, options);
