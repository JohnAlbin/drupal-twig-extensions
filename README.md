# Drupal’s Twig extensions for JavaScript

## Usage

``` javascript
var Twig = require('twig')
var addDrupalExtensions = require('drupal-twig-shim')

// Add the extensions for Drupal.
addDrupalExtensions(Twig);
```

``` twig
{{ 'Hello World!'|clean_id }}
```

### Filters

A comprehensive list of the filters is [available here](http://www.opin.ca/en/article/twig-filters-drupal-8).

- t
- trans
- placeholder
- without
- clean_class
- clean_id
- render
- path
- url
- format_date
- drupal_escape
- safe_join

### Functions

-   link
-   active_theme*
-   attach_library*

_*These are dummy functions that don't do anything except keep Twig.js compilation from breaking when these Drupal-specific functions are used in Drupal Twig templates._
