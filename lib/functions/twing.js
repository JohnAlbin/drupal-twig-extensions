import {
  newEmptyStringFunction,
  newPassThroughFunction,
} from '../helpers/twing.js';
import { options as activeThemeOptions } from './active_theme/definition.js';
import { options as activeThemePathOptions } from './active_theme_path/definition.js';
import { options as attachLibraryOptions } from './attach_library/definition.js';
import createAttributeFunction from './create_attribute/twing.js';
import { options as fileUrlOptions } from './file_url/definition.js';
import linkFunction from './link/twing.js';
import { options as pathOptions } from './path/definition.js';
import renderVarFunction from './render_var/twing.js';
import { options as urlOptions } from './url/definition.js';

const functions = [
  newEmptyStringFunction('active_theme', activeThemeOptions),
  newEmptyStringFunction('active_theme_path', activeThemePathOptions),
  newEmptyStringFunction('attach_library', attachLibraryOptions),
  createAttributeFunction,
  newPassThroughFunction('file_url', fileUrlOptions),
  linkFunction,
  newPassThroughFunction('path', pathOptions),
  renderVarFunction,
  newPassThroughFunction('url', urlOptions),
];

export default functions;

export const functionsConfigInit = [];
