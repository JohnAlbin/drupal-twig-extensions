import { options as activeThemeOptions } from './active_theme/definition';
import { options as activeThemePathOptions } from './active_theme_path/definition';
import { options as attachLibraryOptions } from './attach_library/definition';
import create_attribute from './create_attribute/twing';
import { options as fileUrlOptions } from './file_url/definition';
import link from './link/twing';
import { options as pathOptions } from './path/definition';
import { options as renderVarOptions } from './render_var/definition';
import { options as urlOptions } from './url/definition';
import {
  newEmptyStringFunction,
  newPassThroughFunction,
} from '../helpers/twing';

export default [
  newPassThroughFunction('active_theme', activeThemeOptions),
  newPassThroughFunction('active_theme_path', activeThemePathOptions),
  newEmptyStringFunction('attach_library', attachLibraryOptions),
  create_attribute,
  newPassThroughFunction('file_url', fileUrlOptions),
  link,
  newPassThroughFunction('path', pathOptions),
  newPassThroughFunction('render_var', renderVarOptions),
  newPassThroughFunction('url', urlOptions),
];
