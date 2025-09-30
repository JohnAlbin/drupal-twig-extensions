export const name = 'set_attribute';

export const options = {
  needs_environment: true,
  is_safe: ['html'],
};

export const acceptedArguments = [
  { name: 'attributeName', defaultValue: '' },
  { name: 'attributeValue', defaultValue: '' },
];
