import { callable as create_attribute } from '../create_attribute/definition.js';

export const name = 'link';

export const options = {};

export function callable(title, url, attributes = {}) {
  return `<a href="${url}"${create_attribute(attributes)}>${title}</a>`;
}
