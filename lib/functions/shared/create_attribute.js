import { Attribute } from '../../Attribute';

export default function (attributes) {
  let attributeObject;

  if (attributes instanceof Map || Array.isArray(attributes)) {
    attributeObject = new Attribute(attributes);
  } else {
    attributeObject = new Attribute();

    // Loop through all the given attributes, if any.
    if (attributes) {
      Object.keys(attributes).forEach((key) => {
        // Ensure class is always an array.
        if (key === 'class' && !Array.isArray(attributes[key])) {
          attributeObject.setAttribute(key, [attributes[key]]);
        } else {
          attributeObject.setAttribute(key, attributes[key]);
        }
      });
    }
  }

  return attributeObject;
}
