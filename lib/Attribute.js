// @ts-check

import _Attribute from 'drupal-attribute';

class Attribute {
  /**
   * @param {?Object<string, string|string[]>} attributes
   *   (optional) An associative array of key-value pairs to be converted to
   *   HTML attributes.
   */
  constructor(attributes) {
    this.attribute = new _Attribute(attributes);
  }

  /**
   * @param {string | string[] | Map<string, string> } classes
   */
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

    this.attribute.addClass(...classesArr);
    return this;
  }

  /** @param {string} value */
  hasClass(value) {
    return this.attribute.hasClass(value);
  }

  /** @param {string} key */
  removeAttribute(key) {
    this.attribute.removeAttribute(key);
    return this;
  }

  /** @param {string} value */
  removeClass(value) {
    this.attribute.removeClass(value);
    return this;
  }

  /**
   * @param {string} key
   * @param {string} value
   */
  setAttribute(key, value) {
    this.attribute.setAttribute(key, value);
    return this;
  }

  toString() {
    return this.attribute.toString();
  }
}

export default Attribute;
