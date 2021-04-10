import create_attribute from './create_attribute/twig';
import link from './link/twig';
import { emptyStringExtension, passThroughExtension } from '../helpers/twig';

// eslint-disable camelcase
export default {
  active_theme: passThroughExtension,
  active_theme_path: passThroughExtension,
  attach_library: emptyStringExtension,
  create_attribute,
  file_url: passThroughExtension,
  link,
  path: passThroughExtension,
  render_var: passThroughExtension,
  url: passThroughExtension,
};
