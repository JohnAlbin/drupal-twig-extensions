import {
  newEmptyStringFunction,
  newPassThroughFunction,
} from '../helpers/twing.js';
import activeThemeFunction from './active_theme/twing.js';
import activeThemePathFunction from './active_theme_path/twing.js';
import {
  options as attachLibraryOptions,
  acceptedArguments as attachLibraryAcceptedArguments,
} from './attach_library/definition.js';
import createAttributeFunction from './create_attribute/twing.js';
import {
  options as fileUrlOptions,
  acceptedArguments as fileUrlAcceptedArguments,
} from './file_url/definition.js';
import linkFunction from './link/twing.js';
import {
  options as pathOptions,
  acceptedArguments as pathAcceptedArguments,
} from './path/definition.js';
import renderVarFunction from './render_var/twing.js';
import {
  options as urlOptions,
  acceptedArguments as urlAcceptedArguments,
} from './url/definition.js';

const functions = [
  activeThemeFunction,
  activeThemePathFunction,
  newEmptyStringFunction(
    'attach_library',
    attachLibraryOptions,
    attachLibraryAcceptedArguments,
  ),
  createAttributeFunction,
  newPassThroughFunction('file_url', fileUrlOptions, fileUrlAcceptedArguments),
  linkFunction,
  newPassThroughFunction('path', pathOptions, pathAcceptedArguments),
  renderVarFunction,
  newPassThroughFunction('url', urlOptions, urlAcceptedArguments),
];

export default functions;
