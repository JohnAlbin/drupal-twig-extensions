import { name, callable, options } from './definition';
import { newTwigExtension } from '../../helpers/twig';

export default newTwigExtension(name, callable, options);
