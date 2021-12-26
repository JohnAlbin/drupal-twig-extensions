const newTwigExtension = (
  name,
  callable,
  // eslint-disable-next-line no-unused-vars
  options = {},
  // eslint-disable-next-line no-unused-vars
  acceptedArguments = [],
) => [name, callable];

export default newTwigExtension;
