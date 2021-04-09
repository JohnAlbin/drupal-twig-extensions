export default function (func) {
  return async function (...args) {
    return func(...args);
  };
}
