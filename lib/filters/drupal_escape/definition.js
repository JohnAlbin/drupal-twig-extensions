export const name = 'drupal_escape';

export const options = {
  // PHP Twig option
  needs_environment: true,
  // Twing option
  needs_template: true,
  // @TODO Fix this.
  // Drupal defines this function with the is_safe_callback option set to
  // Twig\Extension\EscaperExtension::twig_escape_filter_is_safe.
  // We use the is_safe option instead:
  is_safe: ['html'],
};

export const acceptedArguments = [{ name: 'strategy' }, { name: 'charset' }];
