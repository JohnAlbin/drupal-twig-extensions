import {
  newEmptyStringExtension,
  newPassThroughExtension,
} from '../helpers/twig.js';
import activeThemeFunction from './active_theme/twig.js';
import activeThemePathFunction from './active_theme_path/twig.js';
import { options as attachLibraryOptions } from './attach_library/definition.js';
import createAttributeFunction from './create_attribute/twig.js';
import { options as fileUrlOptions } from './file_url/definition.js';
import linkFunction from './link/twig.js';
import { options as pathOptions } from './path/definition.js';
import renderVarFunction from './render_var/twig.js';
import { options as urlOptions } from './url/definition.js';

const functions = [
  activeThemeFunction,
  activeThemePathFunction,
  newEmptyStringExtension('attach_library', attachLibraryOptions),
  createAttributeFunction,
  newPassThroughExtension('file_url', fileUrlOptions),
  linkFunction,
  newPassThroughExtension('path', pathOptions),
  renderVarFunction,
  newPassThroughExtension('url', urlOptions),
];

export default functions;
