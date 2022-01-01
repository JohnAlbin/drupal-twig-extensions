import { configInit as activeThemeConfigInit } from './active_theme/definition.js';
import { configInit as activeThemePathConfigInit } from './active_theme_path/definition.js';
import { configInit as fileUrlConfigInit } from './file_url/definition.js';

const configInit = [
  activeThemeConfigInit,
  activeThemePathConfigInit,
  fileUrlConfigInit,
];

export default configInit;
