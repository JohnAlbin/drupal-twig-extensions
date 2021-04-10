const assert = require('assert');
const { TwingEnvironment, TwingLoaderRelativeFilesystem } = require('twing');
const { addDrupalExtensions } = require('../twing');

// Create an instance of the Twing Environment.
const twingEnvironment = new TwingEnvironment(
  new TwingLoaderRelativeFilesystem(),
  { autoescape: false },
);

describe('Twing', function () {
  // Add the extensions for Drupal.
  addDrupalExtensions(twingEnvironment);

  /**
   * Tests the clean_class filter.
   *
   * @see \Drupal\Tests\Component\Utility\testCleanCssIdentifier
   * @see \Drupal\Tests\Component\Utility\testHtmlClass
   */
  it('should use the clean_class filter', async function () {
    let tests = [
      // Verify that no valid ASCII characters are stripped from the identifier.
      {
        data: {
          value:
            'abcdefghijklmnopqrstuvwxyz_ABCDEFGHIJKLMNOPQRSTUVWXYZ-0123456789',
        },
        expected:
          'abcdefghijklmnopqrstuvwxyz-abcdefghijklmnopqrstuvwxyz-0123456789',
      },
      // Verify that valid UTF-8 characters are not stripped from the identifier.
      {
        data: { value: '¡¢£¤¥' },
        expected: '¡¢£¤¥',
      },
      // Verify that double underscores are not stripped from the identifier.
      {
        data: { value: 'css__identifier__with__double__underscores' },
        expected: 'css__identifier__with__double__underscores',
      },
      // Verify that invalid characters (including non-breaking space) are
      // stripped from the identifier.
      {
        data: { value: 'invalid !"#$%&\'()*+,./:;<=>?@[\\]^`{|}~ identifier' }, // eslint-disable-line unicorn/string-content
        expected: 'invalid---identifier',
      },
      // Verify that an identifier starting with a digit is replaced.
      {
        data: { value: '1cssidentifier' },
        expected: '_cssidentifier',
      },
      // Verify that an identifier starting with a hyphen followed by a digit is
      // replaced.
      {
        data: { value: '-1cssidentifier' },
        expected: '__cssidentifier',
      },
      // Verify that an identifier starting with two hyphens is replaced.
      {
        data: { value: '--cssidentifier' },
        expected: '__cssidentifier',
      },
      // Verify Drupal coding standards are enforced.
      {
        data: { value: 'CLASS NAME_[Ü]' },
        expected: 'class-name--ü',
      },
    ];

    const template = await twingEnvironment.createTemplate(
      '{{ value|clean_class }}',
    );

    return Promise.all(
      tests.map((test, index) =>
        template.render(test.data).then((output) => {
          assert.strictEqual(output, tests[index].expected);
        }),
      ),
    );
  });

  /**
   * Tests the clean_id filter.
   *
   * @see \Drupal\Tests\Component\Utility\testHtmlGetId
   */
  it('should use the clean_id filter', async function () {
    let tests = [
      // Verify that letters, digits, and hyphens are not stripped from the ID.
      {
        data: { value: 'abcdefghijklmnopqrstuvwxyz-0123456789' },
        expected: 'abcdefghijklmnopqrstuvwxyz-0123456789',
      },
      // Verify that invalid characters are stripped from the ID.
      {
        data: { value: 'invalid,./:@\\^`{Üidentifier' },
        expected: 'invalididentifier',
      },
      // Verify Drupal coding standards are enforced.
      {
        data: { value: 'ID NAME_[1]' },
        expected: 'id-name-1',
      },
      // Verify that a repeated ID is [not] made unique.
      {
        data: { value: 'test-unique-id' },
        expected: 'test-unique-id',
      },
      {
        data: { value: 'test-unique-id' },
        expected: 'test-unique-id',
      },
    ];

    const template = await twingEnvironment.createTemplate(
      '{{ value|clean_id }}',
    );

    return Promise.all(
      tests.map((test, index) =>
        template.render(test.data).then((output) => {
          assert.strictEqual(output, tests[index].expected);
        }),
      ),
    );
  });

  /**
   * Tests the clean_id filter.
   *
   * @see \Drupal\Tests\Kernel/Theme/TwigFilterTest
   */
  it('should use the without filter', async function () {
    // The variables to pass to the templates.
    const data = {
      quote: {
        content:
          'You can only find truth with logic if you have already found truth without it.',
        author: 'Gilbert Keith Chesterton',
        date: '1874-1936',
      },
    };

    // No author
    let template = await twingEnvironment.createTemplate(
      'No author: {{ quote|without("author")|join }}',
    );
    let output = await template.render(data);
    assert.strictEqual(
      output,
      'No author: You can only find truth with logic if you have already found truth without it.1874-1936',
    );

    // Just author
    template = await twingEnvironment.createTemplate(
      'Just author: {{ quote|without("content", "date")|join }}',
    );
    output = await template.render(data);
    assert.strictEqual(output, 'Just author: Gilbert Keith Chesterton');

    // No input
    template = await twingEnvironment.createTemplate(
      'No input: {{ nothing|without("content", "date")|join }}',
    );
    output = await template.render(data);
    assert.strictEqual(output, 'No input: ');
  });

  it('should create a link', async function () {
    const template = await twingEnvironment.createTemplate(
      'Visit my {{ link(title, url, attributes) }}!',
    );
    let output = await template.render({
      title: 'Website',
      url: 'http://example.com',
      attributes: {
        class: ['foo', 'bar', 'baz'],
      },
    });
    assert.strictEqual(
      output,
      'Visit my <a href="http://example.com" class="foo bar baz">Website</a>!',
    );

    output = await template.render({
      title: 'Site',
      url: 'http://example.com',
      attributes: {
        class: 'awesome',
      },
    });
    assert.strictEqual(
      output,
      'Visit my <a href="http://example.com" class="awesome">Site</a>!',
    );
  });
});
