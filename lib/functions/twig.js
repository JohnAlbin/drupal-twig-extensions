import {
  newEmptyStringExtension,
  newPassThroughExtension,
} from '../helpers/twig.js';
import activeThemeFunction from './active_theme/twig.js';
import activeThemePathFunction from './active_theme_path/twig.js';
import {
  options as attachLibraryOptions,
  acceptedArguments as attachLibraryAcceptedArguments,
} from './attach_library/definition.js';
import createAttributeFunction from './create_attribute/twig.js';
import fileUrlFunction from './file_url/twig.js';
import linkFunction from './link/twig.js';
import {
  options as pathOptions,
  acceptedArguments as pathAcceptedArguments,
} from './path/definition.js';
import renderVarFunction from './render_var/twig.js';
import {
  options as urlOptions,
  acceptedArguments as urlAcceptedArguments,
} from './url/definition.js';

const functions = [
  activeThemeFunction,
  activeThemePathFunction,
  newEmptyStringExtension(
    'attach_library',
    attachLibraryOptions,
    attachLibraryAcceptedArguments,
  ),
  createAttributeFunction,
  fileUrlFunction,
  linkFunction,
  newPassThroughExtension('path', pathOptions, pathAcceptedArguments),
  renderVarFunction,
  newPassThroughExtension('url', urlOptions, urlAcceptedArguments),
];

export default functions;
