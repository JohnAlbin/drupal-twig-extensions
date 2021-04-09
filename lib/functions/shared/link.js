import create_attribute from './create_attribute';

export default function (title, url, attributes = {}) {
  const attribute = create_attribute(attributes);
  return '<a href="' + url + '"' + attribute + '>' + title + '</a>';
}
