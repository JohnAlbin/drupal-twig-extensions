import test from 'ava';
import { setupTwigBefore, renderTemplateMacro } from '#twig-fixture';

test.before(setupTwigBefore);

test(
  'should render to an empty string with no parameters',
  renderTemplateMacro,
  {
    template: '<div{{ create_attribute() }}>',
    data: {},
    expected: '<div>',
  },
);

test(
  'should create an Attribute object with static parameters',
  renderTemplateMacro,
  {
    template:
      '<div{{ create_attribute({ id: "example", class: ["class1", "class2"] }) }}>',
    data: {},
    // order of printed attributes is "reversed" here; not sure why, but probably okay?
    expected: '<div class="class1 class2" id="example">',
  },
);

test(
  'should create an Attribute object with object variable parameters',
  renderTemplateMacro,
  {
    template: '<div{{ create_attribute(attributes) }}>',
    data: {
      attributes: { id: 'example', class: ['class1', 'class2'] },
    },
    expected: '<div id="example" class="class1 class2">',
  },
);

test(
  'should create an Attribute object with map variable parameters',
  renderTemplateMacro,
  {
    template: '<div{{ create_attribute(attributes) }}>',
    data: {
      attributes: new Map([
        ['id', 'example'],
        ['class', ['class1', 'class2']],
      ]),
    },
    expected: '<div id="example" class="class1 class2">',
  },
);

test('should return an Attribute object with methods', renderTemplateMacro, {
  template:
    '<div{{ create_attribute().setAttribute("id", "example").addClass(["class1", "class2"]) }}>',
  data: {},
  expected: '<div id="example" class="class1 class2">',
});

test(
  'should return an Attribute object with accessible properties',
  renderTemplateMacro,
  {
    template:
      '{% set attributes = create_attribute({ "id": "example", "class": ["foo", "bar"] }) %}id:{{ attributes.id }}:class:{{ attributes.class }}:',
    data: {},
    expected: 'id:example:class:foo bar:',
  },
);
