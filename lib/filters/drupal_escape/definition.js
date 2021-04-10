export const name = 'drupal_escape';

export const options = {
  needs_environment: true,
  // @TODO Fix this.
  // Drupal defines this function with the is_safe_callback option set to
  // Twig\Extension\EscaperExtension::twig_escape_filter_is_safe.
  // We use the is_safe option instead:
  is_safe: ['html'],
};
