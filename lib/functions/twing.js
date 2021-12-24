import {
  newEmptyStringFunction,
  newPassThroughFunction,
} from '../helpers/twing.js';
import { options as activeThemeOptions } from './active_theme/definition.js';
import { options as activeThemePathOptions } from './active_theme_path/definition.js';
import { options as attachLibraryOptions } from './attach_library/definition.js';
import create_attribute from './create_attribute/twing.js';
import { options as fileUrlOptions } from './file_url/definition.js';
import link from './link/twing.js';
import { options as pathOptions } from './path/definition.js';
import render_var from './render_var/twing.js';
import { options as urlOptions } from './url/definition.js';

const functions = [
  newEmptyStringFunction('active_theme', activeThemeOptions),
  newEmptyStringFunction('active_theme_path', activeThemePathOptions),
  newEmptyStringFunction('attach_library', attachLibraryOptions),
  create_attribute,
  newPassThroughFunction('file_url', fileUrlOptions),
  link,
  newPassThroughFunction('path', pathOptions),
  render_var,
  newPassThroughFunction('url', urlOptions),
];

export default functions;
