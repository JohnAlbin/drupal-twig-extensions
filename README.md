# Drupal’s Twig extensions for JavaScript

## Usage

If you use Twing:

```javascript
var Twing,
  { TwingEnvironment, TwingLoaderRelativeFilesystem } = require('twing');
var { addDrupalExtensions } = require('drupal-twig-extensions/twing');

// Create an instance of the Twing Environment.
const twingEnvironment = new TwingEnvironment(
  new TwingLoaderRelativeFilesystem(),
);

// Add the extensions for Drupal.
addDrupalExtensions(twingEnvironment);

// If you use twing-loader, it will need access to the same twing environment.
module.exports = twingEnvironment;
```

If you use Twig.js:

```javascript
var Twig = require('twig');
var { addDrupalExtensions } = require('drupal-twig-extensions/twig');

// Add the extensions for Drupal.
addDrupalExtensions(Twig);
```

In your Twig templates, you can now use the Drupal extensions documented later in this README.

```twig
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

- link
- active_theme\*
- attach_library\*

_\*These are dummy functions that don't do anything except keep Twig.js compilation from breaking when these Drupal-specific functions are used in Drupal Twig templates._
