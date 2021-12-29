import {
  newEmptyStringExtension,
  newPassThroughExtension,
} from '../helpers/twig.js';
import { options as activeThemeOptions } from './active_theme/definition.js';
import { options as activeThemePathOptions } from './active_theme_path/definition.js';
import { options as attachLibraryOptions } from './attach_library/definition.js';
import createAttributeFunction from './create_attribute/twig.js';
import { options as fileUrlOptions } from './file_url/definition.js';
import linkFunction from './link/twig.js';
import { options as pathOptions } from './path/definition.js';
import renderVarFunction from './render_var/twig.js';
import { options as urlOptions } from './url/definition.js';

const functions = [
  newEmptyStringExtension('active_theme', activeThemeOptions),
  newEmptyStringExtension('active_theme_path', activeThemePathOptions),
  newEmptyStringExtension('attach_library', attachLibraryOptions),
  createAttributeFunction,
  newPassThroughExtension('file_url', fileUrlOptions),
  linkFunction,
  newPassThroughExtension('path', pathOptions),
  renderVarFunction,
  newPassThroughExtension('url', urlOptions),
];

export default functions;
