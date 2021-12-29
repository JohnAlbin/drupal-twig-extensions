import { newTwigExtension } from '../../helpers/twig.js';
import {
  name,
  options,
  acceptedArguments,
  createAttribute,
} from './definition.js';

export const callable = createAttribute;

export default newTwigExtension(name, callable, options, acceptedArguments);
