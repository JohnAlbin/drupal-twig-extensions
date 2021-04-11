const { TwingEnvironment, TwingLoaderRelativeFilesystem } = require('twing');
const { addDrupalExtensions } = require('../../twing');

const setupTwingBefore = (t) => {
  // Create an instance of the Twing Environment.
  const twingEnvironment = new TwingEnvironment(
    new TwingLoaderRelativeFilesystem(),
    { autoescape: false },
  );

  // Add the extensions for Drupal.
  addDrupalExtensions(twingEnvironment);

  t.context.twingEnvironment = twingEnvironment;
};

const renderTemplateMacro = async (t, options) => {
  const compiledTemplate = await t.context.twingEnvironment.createTemplate(
    options.template,
  );

  let actual = await compiledTemplate.render(options.data);

  t.is(actual, options.expected);
};

module.exports = {
  setupTwingBefore,
  renderTemplateMacro,
};
