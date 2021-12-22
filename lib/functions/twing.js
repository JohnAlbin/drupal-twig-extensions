import { options as activeThemeOptions } from './active_theme/definition.js';
import { options as activeThemePathOptions } from './active_theme_path/definition.js';
import { options as attachLibraryOptions } from './attach_library/definition.js';
import create_attribute from './create_attribute/twing.js';
import { options as fileUrlOptions } from './file_url/definition.js';
import link from './link/twing.js';
import { options as pathOptions } from './path/definition.js';
import { options as renderVarOptions } from './render_var/definition.js';
import { options as urlOptions } from './url/definition.js';
import {
  newEmptyStringFunction,
  newPassThroughFunction,
} from '../helpers/twing.js';

export default [
  newEmptyStringFunction('active_theme', activeThemeOptions),
  newEmptyStringFunction('active_theme_path', activeThemePathOptions),
  newEmptyStringFunction('attach_library', attachLibraryOptions),
  create_attribute,
  newPassThroughFunction('file_url', fileUrlOptions),
  link,
  newPassThroughFunction('path', pathOptions),
  newPassThroughFunction('render_var', renderVarOptions),
  newPassThroughFunction('url', urlOptions),
];
