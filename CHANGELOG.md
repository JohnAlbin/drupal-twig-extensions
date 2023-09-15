# Changelog

All notable changes to this project will be documented in this file. See [standard-version](https://github.com/conventional-changelog/standard-version) for commit guidelines.

## [1.0.0-beta.5](https://github.com/JohnAlbin/drupal-twig-extensions/compare/v1.0.0-beta.4...v1.0.0-beta.5) (2023-09-15)


### Bug Fixes

* Wrong export path for "functions" ([f59124f](https://github.com/JohnAlbin/drupal-twig-extensions/commit/f59124f3a1a8b182472384c9b068e44e708c0737)), closes [#55](https://github.com/JohnAlbin/drupal-twig-extensions/issues/55)

## [1.0.0-beta.4](https://github.com/JohnAlbin/drupal-twig-extensions/compare/v1.0.0-beta.3...v1.0.0-beta.4) (2022-01-04)


### Features

* Add setup options for file_url function ([130a2e4](https://github.com/JohnAlbin/drupal-twig-extensions/commit/130a2e48889565f18a2e4c4349df8935c9d53f9f)), closes [#31](https://github.com/JohnAlbin/drupal-twig-extensions/issues/31)


### Bug Fixes

* Add dual support for CommonJS and ES Modules ([ad301fe](https://github.com/JohnAlbin/drupal-twig-extensions/commit/ad301feb19f345d51a3ac947b06be444046a2138)), closes [#46](https://github.com/JohnAlbin/drupal-twig-extensions/issues/46) [#43](https://github.com/JohnAlbin/drupal-twig-extensions/issues/43)
* **Twing:** safe_join filter in Twing should join object values ([ea2531e](https://github.com/JohnAlbin/drupal-twig-extensions/commit/ea2531e9d9deb3b6f9fa8fca786707c791aa0491)), closes [#44](https://github.com/JohnAlbin/drupal-twig-extensions/issues/44)

## [1.0.0-beta.3](https://github.com/JohnAlbin/drupal-twig-extensions/compare/v1.0.0-beta.2...v1.0.0-beta.3) (2021-12-31)


### Bug Fixes

* Enable Webpack 4 compatibility ([c9e0654](https://github.com/JohnAlbin/drupal-twig-extensions/commit/c9e065481a6decee7e232064f8eb1efead9d81cf), [a55bf0f](https://github.com/JohnAlbin/drupal-twig-extensions/commit/a55bf0f13858e102e7cc9fb9bcee006807bcbf34)), closes [#37](https://github.com/JohnAlbin/drupal-twig-extensions/issues/37)

## [1.0.0-beta.2](https://github.com/JohnAlbin/drupal-twig-extensions/compare/v1.0.0-beta.1...v1.0.0-beta.2) (2021-12-31)


### Features

* render filter should implement logic of TwigExtension::renderVar ([83a84bc](https://github.com/JohnAlbin/drupal-twig-extensions/commit/83a84bc07d161da00b47fa057a21d689154859da)), closes [#41](https://github.com/JohnAlbin/drupal-twig-extensions/issues/41)


### Bug Fixes

* Render filter should convert null/undefined to empty string ([b2cf5d4](https://github.com/JohnAlbin/drupal-twig-extensions/commit/b2cf5d49dcac6d89c647bbf5a5d33dacc1686870)), closes [#40](https://github.com/JohnAlbin/drupal-twig-extensions/issues/40)

## [1.0.0-beta.1](https://github.com/JohnAlbin/drupal-twig-extensions/compare/v1.0.0-alpha.6...v1.0.0-beta.1) (2021-12-29)


### ⚠ BREAKING CHANGES

* **node.js:** Drop support for Node.js v12 which does not support ES Modules
without an experimental flag. Projects needing Node.js v12 support before the
Node.js v12 LTS support ends on May 1, 2022 should continue to use
drupal-twig-extensions v1.0.0-alpha.6.

### Features

* **placeholder:** Add placeholder filter implementation ([1745c85](https://github.com/JohnAlbin/drupal-twig-extensions/commit/1745c85139d0f0e7f29d2f451314104505923957)), closes [#15](https://github.com/JohnAlbin/drupal-twig-extensions/issues/15) [#6](https://github.com/JohnAlbin/drupal-twig-extensions/issues/6)
* **format_date:** Add setup options for date formats ([c4ff787](https://github.com/JohnAlbin/drupal-twig-extensions/commit/c4ff78717b1897531a0e42b8c57e7b1d530f93cc)), closes [#29](https://github.com/JohnAlbin/drupal-twig-extensions/issues/29)
* **active_theme:** Add setup options for active_theme function ([c330f35](https://github.com/JohnAlbin/drupal-twig-extensions/commit/c330f359ac323f80b6f5e8f1e05d8b8512ab0154)), closes [#32](https://github.com/JohnAlbin/drupal-twig-extensions/issues/32)
* **active_theme_path:** Add setup options for active_theme_path function ([b5a1233](https://github.com/JohnAlbin/drupal-twig-extensions/commit/b5a123363345e60b5522c2c5ddda4a03286ea6e3)), closes [#33](https://github.com/JohnAlbin/drupal-twig-extensions/issues/33)
* **format_date:** Add format_date filter ([eaa059b](https://github.com/JohnAlbin/drupal-twig-extensions/commit/eaa059b41bd61ad038e37b6e0b04a7398df293e1), [ba96bc1](https://github.com/JohnAlbin/drupal-twig-extensions/commit/ba96bc1907cf4d6093668ed2d087386ba9d8eb4c)), closes [#10](https://github.com/JohnAlbin/drupal-twig-extensions/issues/10) [#6](https://github.com/JohnAlbin/drupal-twig-extensions/issues/6)
* **node.js:** Drop support for Node.js v12 ([1919496](https://github.com/JohnAlbin/drupal-twig-extensions/commit/1919496074be05c9798271a5a6b3315127e32a37)), closes [#20](https://github.com/JohnAlbin/drupal-twig-extensions/issues/20)


### Bug Fixes

* **drupal_escape:** Fix "drupal_escape" filter in Twing ([e126e27](https://github.com/JohnAlbin/drupal-twig-extensions/commit/e126e279f3ce7a59c7f02fb6096478d498b4293c)), closes [#16](https://github.com/JohnAlbin/drupal-twig-extensions/issues/16)
* **clean_class:** Fix caching of clean_class filter results ([9c56689](https://github.com/JohnAlbin/drupal-twig-extensions/commit/9c566894c7207553d938f9eb7a740421d686700d), [630252a](https://github.com/JohnAlbin/drupal-twig-extensions/commit/630252acbdd6174f58ec3cff3f527ec22c603f18)), closes [#30](https://github.com/JohnAlbin/drupal-twig-extensions/issues/30)
* **render_var:** render_var function should return string ([d8c0b43](https://github.com/JohnAlbin/drupal-twig-extensions/commit/d8c0b43ffe7aa9aabb93a124ab63c1de69d0686a)), closes [#11](https://github.com/JohnAlbin/drupal-twig-extensions/issues/11) [#6](https://github.com/JohnAlbin/drupal-twig-extensions/issues/6)
* **render:** Render filter should return string ([9adc5b5](https://github.com/JohnAlbin/drupal-twig-extensions/commit/9adc5b5603e410bf7ce5654cfc3fa42f1522df35)), closes [#11](https://github.com/JohnAlbin/drupal-twig-extensions/issues/11)
* **without:** "without" filter should make deep clone of element ([e082a85](https://github.com/JohnAlbin/drupal-twig-extensions/commit/e082a853c48f5f670707b71617460126f8ecc712)), closes [#18](https://github.com/JohnAlbin/drupal-twig-extensions/issues/18)
* **without:** Filter "without" fails in Twing ([e2f6550](https://github.com/JohnAlbin/drupal-twig-extensions/commit/e2f65508f5f706eabcffed551a06131805d66219)), closes [#4](https://github.com/JohnAlbin/drupal-twig-extensions/issues/4)

## [1.0.0-alpha.6](https://github.com/JohnAlbin/drupal-twig-extensions/compare/v1.0.0-alpha.5...v1.0.0-alpha.6) (2021-04-11)


### Bug Fixes

* active_theme_path and active_theme should return strings ([2036335](https://github.com/JohnAlbin/drupal-twig-extensions/commit/20363350c538adb3c330d214222e9e04298e0d0f)), closes [#12](https://github.com/JohnAlbin/drupal-twig-extensions/issues/12)

## [1.0.0-alpha.5](https://github.com/JohnAlbin/drupal-twig-extensions/compare/v1.0.0-alpha.4...v1.0.0-alpha.5) (2021-04-10)

### Features

- Add options to extension definitions ([8e073cf](https://github.com/JohnAlbin/drupal-twig-extensions/commit/8e073cf29b747b089096e28af2f1730c599bd082)), closes [#3](https://github.com/JohnAlbin/drupal-twig-extensions/issues/3)

## [1.0.0-alpha.4](https://github.com/JohnAlbin/drupal-twig-extensions/compare/v1.0.0-alpha.3...v1.0.0-alpha.4) (2021-04-10)

### Bug Fixes

- Work-around for TwingFilter/TwingFunction bug ([3bfc258](https://github.com/JohnAlbin/drupal-twig-extensions/commit/3bfc258d1339287e665abb1cafbcbb1aea2c8401))

## [1.0.0-alpha.3](https://github.com/JohnAlbin/drupal-twig-extensions/compare/v1.0.0-alpha.2...v1.0.0-alpha.3) (2021-04-09)

### Features

- Add create_attribute function ([963d085](https://github.com/JohnAlbin/drupal-twig-extensions/commit/963d085ab179ffe3e0cef24033a1ac55f9e6dd2f))

## [1.0.0-alpha.2](https://github.com/JohnAlbin/drupal-twig-extensions/compare/v1.0.0-alpha.1...v1.0.0-alpha.2) (2021-04-06)

### Features

- Add untested Twing support ([9831e45](https://github.com/JohnAlbin/drupal-twig-extensions/commit/9831e458920e9fde9a0c294d1ed51c09c9e087a8))

## 1.0.0-alpha.1 (2021-03-22)

- Initial release
