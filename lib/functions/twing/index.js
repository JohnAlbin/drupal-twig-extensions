import dummyEmptyString from '../../helpers/twing/dummyEmptyString';
import dummyPassthrough from '../../helpers/twing/dummyPassthrough';
import makeAsync from '../../helpers/twing/makeAsync';
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
  create_attribute: makeAsync(create_attribute),
  link: makeAsync(link),
};
