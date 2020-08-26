'use-strict'
/**
 * General utilities to handle URLs
 * @module router/utils/router-utils
 */

/**
 * Clears the slashes of the path
 * @param {string} path Path that is goning to have the slashes cleared
 * @returns {string} Returns the string withou slashes
 */
export function clearSlashes(path) {
  let validatedPath = path.replace(/^\/*/, "").replace(/\/*$/, "");
  return validatedPath;
}

/**
 * Returns 'true' if the path is unique on the routes list.
 * @param {string} path The path to be checked
 * @returns {boolean} true or false;
 */
export function isUnique(path) {
  if (!this.routes.length) {
    return true;
  }

  for (let i = 0; i < this.routes.length; i++) {
    if (this.routes[i].path === path) {
      return false;
    }
    if (i === this.routes.length - 1) {
      return true;
    }
  }
}

/**
 * @returns {string} The current path without slashes
 */
export function getCurrentPath() {
  let currentPath = clearSlashes(window.location.pathname);
  if(!currentPath) {
    return ''
  }
  return currentPath;
}
