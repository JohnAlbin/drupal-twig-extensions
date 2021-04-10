import create_attribute from './create_attribute/twing';
import link from './link/twing';
import { emptyStringExtension, passThroughExtension } from '../helpers/twing';

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
