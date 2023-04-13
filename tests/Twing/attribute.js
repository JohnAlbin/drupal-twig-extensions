import test from 'ava';
import DrupalAttribute from 'drupal-attribute';
import { Attribute } from '#twing';

test.failing('should export drupal-attribute as Attribute', (t) => {
  t.deepEqual(Attribute, DrupalAttribute);
});
