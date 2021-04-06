import dummyEmptyString from '../../helpers/twing/dummyEmptyString';
import dummyPassthrough from '../../helpers/twing/dummyPassthrough';
import link from './link';

// eslint-disable camelcase
export default {
  attach_library: dummyEmptyString,
  render_var: dummyPassthrough,
  url: dummyPassthrough,
  file_url: dummyPassthrough,
  active_theme_path: dummyPassthrough,
  active_theme: dummyPassthrough,
  path: dummyPassthrough,
  link,
};
