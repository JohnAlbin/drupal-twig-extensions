import {
  newEmptyStringExtension,
  newPassThroughExtension,
} from '../helpers/twig.js';
import { options as activeThemeOptions } from './active_theme/definition.js';
import { options as activeThemePathOptions } from './active_theme_path/definition.js';
import { options as attachLibraryOptions } from './attach_library/definition.js';
import create_attribute from './create_attribute/twig.js';
import { options as fileUrlOptions } from './file_url/definition.js';
import link from './link/twig.js';
import { options as pathOptions } from './path/definition.js';
import render_var from './render_var/twig.js';
import { options as urlOptions } from './url/definition.js';

const functions = [
  newEmptyStringExtension('active_theme', activeThemeOptions),
  newEmptyStringExtension('active_theme_path', activeThemePathOptions),
  newEmptyStringExtension('attach_library', attachLibraryOptions),
  create_attribute,
  newPassThroughExtension('file_url', fileUrlOptions),
  link,
  newPassThroughExtension('path', pathOptions),
  render_var,
  newPassThroughExtension('url', urlOptions),
];

export default functions;
