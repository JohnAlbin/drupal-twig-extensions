export const name = 'path';

export const options = {
  // Drupal defines this function with the is_safe_callback option set to
  // Drupal\Core\Template\TwigExtension::isUrlGenerationSafe.
  // We use the is_safe option instead:
  is_safe: ['html'],
};
