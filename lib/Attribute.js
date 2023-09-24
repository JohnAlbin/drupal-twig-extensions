// @ts-check

import _Attribute from 'drupal-attribute';

const protectedNames = new Set([
  '_attribute',
  '_classes',
  'class',
  'addClass',
  'hasClass',
  'removeAttribute',
  'removeClass',
  'setAttribute',
  'toString',
]);

class Attribute {
  /**
   * @param {Map<string, string | string[] | Map<number, string>> | Record<string, string | string[]> | undefined} attributes
   *   (optional) An associative array of key-value pairs to be converted to
   *   HTML attributes.
   */
  constructor(attributes = undefined) {
    this._attribute = new _Attribute([]);

    /** @type {Set<string>} */
    this._classes = new Set();

    if (!attributes) return;

    for (const [key, value] of attributes instanceof Map
      ? attributes
      : Object.entries(attributes).filter(([key]) => key !== '_keys')) {
      if (typeof value === 'string') {
        if (key === 'class') {
          this.addClass(value);
        } else {
          this.setAttribute(key, value);
        }
      } else if (Array.isArray(value)) {
        if (key === 'class') {
          this.addClass(value);
        } else {
          this.setAttribute(key, value.join(' '));
        }
      } else {
        if (key === 'class') {
          this.addClass([...value.values()]);
        } else {
          this.setAttribute(key, [...value.values()].join(' '));
        }
      }
    }
  }

  // for property-access (like `{{ attributes.class }}`)
  get class() {
    return [...this._classes.values()].join(' ');
  }

  /** @param {string | string[] | Map<string, string> } classes */
  addClass(classes) {
    /** @type {string[]} */
    let classesArr;

    if (classes instanceof Map) {
      classesArr = Array.from(classes.values());
    } else if (typeof classes === 'string') {
      classesArr = [classes];
    } else {
      classesArr = classes;
    }

    this._attribute.addClass(...classesArr);

    for (const className of classesArr) {
      this._classes.add(className);
    }

    return this;
  }

  /** @param {string} value */
  hasClass(value) {
    return this._attribute.hasClass(value);
  }

  /** @param {string} key */
  removeAttribute(key) {
    this._attribute.removeAttribute(key);

    // for property-access (like `{{ attributes.style }}`)
    if (!protectedNames.has(key)) {
      delete this[key];
    }

    return this;
  }

  /** @param {string} value */
  removeClass(value) {
    this._attribute.removeClass(value);
    this._classes.delete(value);
    return this;
  }

  /**
   * @param {string} key
   * @param {string} value
   */
  setAttribute(key, value) {
    this._attribute.setAttribute(key, value);

    // for property-access (like `{{ attributes.style }}`)
    if (!protectedNames.has(key)) {
      this[key] = value;
    }

    return this;
  }

  toString() {
    return this._attribute.toString();
  }
}

export default Attribute;
