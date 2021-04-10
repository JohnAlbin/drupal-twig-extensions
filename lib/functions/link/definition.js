import { callable as create_attribute } from '../create_attribute/definition';

export const name = 'link';

export const options = {};

export const callable = function (title, url, attributes = {}) {
  return `<a href="${url}"${create_attribute(attributes)}>${title}</a>`;
};
