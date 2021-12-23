# Drupal’s Twig extensions for JavaScript

[![Node.js CI](https://github.com/JohnAlbin/drupal-twig-extensions/actions/workflows/node.js.yml/badge.svg)](https://github.com/JohnAlbin/drupal-twig-extensions/actions/workflows/node.js.yml)
[![Coverage Status](https://coveralls.io/repos/github/JohnAlbin/drupal-twig-extensions/badge.svg?branch=main)](https://coveralls.io/github/JohnAlbin/drupal-twig-extensions?branch=main)

It’s common for Drupal developers to use a style guide tool to document/display a project’s frontend components. Most of these style guide tools are written in JavaScript and don’t easily integrate with the PHP code in Twig. Fortunately, there are two different ports of Twig into JavaScript, [Twig.js](https://github.com/twigjs/twig.js/) and [Twing](https://github.com/NightlyCommit/twing).

This project is the JavaScript port of Drupal 9’s Twig extensions for use with either Twig.js or Twing.

## Installation

In order for this project to work, you **must install either Twig.js or Twing**.

To install Twig.js: `npm install --save-dev twig`

To install Twing: `npm install --save-dev twing`

Then install this project with:<br />
`npm install --save-dev drupal-twig-extensions`

## Usage

### Twig.js 1.15.0 or later

If you use Twig.js, use the following JavaScript to integrate with Twig:

```javascript
import Twig from 'twig';
import { addDrupalExtensions } from 'drupal-twig-extensions/twig';

// Add the extensions for Drupal.
addDrupalExtensions(Twig);
```

### Twing 5.0.2 or later

If you use Twing, use the following JavaScript to integrate with Twing:

```javascript
import { TwingEnvironment, TwingLoaderRelativeFilesystem } from 'twing';
import { addDrupalExtensions } from 'drupal-twig-extensions/twing';

// Create an instance of the Twing Environment.
const twingEnvironment = new TwingEnvironment(
  new TwingLoaderRelativeFilesystem(),
);

// Add the extensions for Drupal.
addDrupalExtensions(twingEnvironment);

// If you use twing-loader, it will need access to the same twing environment.
export default twingEnvironment;
```

In your Twig templates, you can now use the Drupal extensions documented later in this README.

```twig
{{ 'Hello World!'|clean_id }}
```

## Implementation details

### Filters

The [official list of filters is in Drupal 9’s code](https://api.drupal.org/api/drupal/core%21lib%21Drupal%21Core%21Template%21TwigExtension.php/function/TwigExtension%3A%3AgetFilters/9) and are described in [Drupal’s Twig filters documentation](https://www.drupal.org/docs/theming-drupal/twig-in-drupal/filters-modifying-variables-in-twig-templates).

- `clean_class`
- `clean_id`
- `drupal_escape`
- `format_date`<sup>1</sup>
- `placeholder`<sup>1</sup>
- `render`<sup>1</sup>
- `safe_join`
- `t`<sup>1</sup>
- `trans`<sup>1</sup>
- `without`

<sup>1</sup> These filters do not work the same as they do in Drupal; they just return their input without modification. They are implemented to keep Twig compilation from breaking when these Drupal-specific filters are used in Twig templates.

### Functions

The [official list of functions is in Drupal 9’s code](https://api.drupal.org/api/drupal/core%21lib%21Drupal%21Core%21Template%21TwigExtension.php/function/TwigExtension%3A%3AgetFunctions/9) and are described in [Drupal’s Twig functions documentation](https://www.drupal.org/docs/theming-drupal/twig-in-drupal/functions-in-twig-templates).

- `active_theme`<sup>2</sup>
- `active_theme_path`<sup>2</sup>
- `attach_library`<sup>2</sup>
- `create_attribute`
- `file_url`<sup>1</sup>
- `link`
- `path`<sup>1</sup>
- `render_var`<sup>1</sup>
- `url`<sup>1</sup>

<sup>1</sup> These functions do not work the same as they do in Drupal; they just return their input without modification. They are implemented to keep Twig compilation from breaking when these Drupal-specific functions are used in Twig templates.

<sup>2</sup> These functions do not work the same as they do in Drupal; they just return an empty string. They are implemented to keep Twig compilation from breaking when these Drupal-specific functions are used in Twig templates.

### Tags

NOTE: Tags have not yet been implemented in this project.

The [official list of tags is in Drupal 9’s code](https://api.drupal.org/api/drupal/core%21lib%21Drupal%21Core%21Template%21TwigExtension.php/function/TwigExtension%3A%3AgetTokenParsers/9).

- `trans`, `plural`, and `endtrans`: These tags are described in [Drupal’s “Translation in Twig templates” documentation](https://www.drupal.org/docs/8/api/translation-api/overview#s-translation-in-twig-templates).

### Tests and operators

Drupal 9 does not currently implement any custom Twig tests or Twig operators.
