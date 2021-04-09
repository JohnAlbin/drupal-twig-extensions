export default function (title, url, attributes) {
  attributes = attributes || {};
  let finalAttributes = '';

  // Loop through all the given attributes.
  for (let attribute in attributes) {
    // Support arrays in the attributes list (e.g., class).
    if (Array.isArray(attributes[attribute])) {
      finalAttributes +=
        ' ' + attribute + '="' + attributes[attribute].join(' ') + '"';
    } else {
      // Otherwise, allow toString() to do its thing.
      finalAttributes += ' ' + attribute + '="' + attributes[attribute] + '"';
    }
  }

  // Construct the link.
  return '<a href="' + url + '"' + finalAttributes + '>' + title + '</a>';
}
