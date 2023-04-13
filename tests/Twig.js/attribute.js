import test from 'ava';
import DrupalAttribute from 'drupal-attribute';
import { Attribute } from '#twig';

test.failing('should export drupal-attribute as Attribute', (t) => {
  t.deepEqual(Attribute, DrupalAttribute);
});
