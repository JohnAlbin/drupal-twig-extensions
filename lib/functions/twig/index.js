import dummyEmptyString from '../../helpers/twig/dummyEmptyString';
import dummyPassthrough from '../../helpers/twig/dummyPassthrough';
import create_attribute from '../shared/create_attribute';
import link from '../shared/link';

// eslint-disable camelcase
export default {
  attach_library: dummyEmptyString,
  render_var: dummyPassthrough,
  url: dummyPassthrough,
  file_url: dummyPassthrough,
  active_theme_path: dummyPassthrough,
  active_theme: dummyPassthrough,
  path: dummyPassthrough,
  create_attribute,
  link,
};
