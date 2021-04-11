import { options as activeThemeOptions } from './active_theme/definition';
import { options as activeThemePathOptions } from './active_theme_path/definition';
import { options as attachLibraryOptions } from './attach_library/definition';
import create_attribute from './create_attribute/twig';
import { options as fileUrlOptions } from './file_url/definition';
import link from './link/twig';
import { options as pathOptions } from './path/definition';
import { options as renderVarOptions } from './render_var/definition';
import { options as urlOptions } from './url/definition';
import {
  newEmptyStringExtension,
  newPassThroughExtension,
} from '../helpers/twig';

export default [
  newEmptyStringExtension('active_theme', activeThemeOptions),
  newEmptyStringExtension('active_theme_path', activeThemePathOptions),
  newEmptyStringExtension('attach_library', attachLibraryOptions),
  create_attribute,
  newPassThroughExtension('file_url', fileUrlOptions),
  link,
  newPassThroughExtension('path', pathOptions),
  newPassThroughExtension('render_var', renderVarOptions),
  newPassThroughExtension('url', urlOptions),
];
