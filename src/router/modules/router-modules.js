import {clearSlashes, getCurrentPath } from '../utils/router-utils'

/**
 * @typedef {{path: string, content:string }} Route
 * @param {string} path The name that goes on the url.
 * @param {string} content The data-content contained on the HTML content.
 */

export default class RouterModules {
  /**
   * Receives the initial route.
   * @param {Route} root  Initial route.
   */
  constructor(root) {
    this.handleReload();
    this.openHomePage(root)
  }
  handleReload() {
    window.onpopstate = this.renderContent(getCurrentPath());
  }

/**
 * Adds a new route
 * @param {Route} route 
 * @private
 */
  addRoute(route) {
    this.routes.push(route);
  }

  /**
   * Adds all the click events to all elements that contains data-page value.
   * @param {srting} path the URL's path
   * @param {string} content the data-content value
   */
  addNavigation(path, content) {
    let linkEl = document.querySelectorAll(`[data-page=${path}]`);
    for (let i = 0; i < linkEl.length; i++) {
      linkEl[i].addEventListener("click", (event) => {
        event.preventDefault() ? event.preventDefault() : null;
        this.navigate(path, content);
      });
    }
  }

  /**
   * Opens the initial page that is set in root.
   * @param {Route} root The path to the initial route.
   */
  openHomePage(root) {
    let currentPath = clearSlashes(window.location.pathname);
    if (!currentPath) {
      this.navigate(root.path, root.content);
      return;
    }
  }

  /**
   * Changes the URL on  the navigation bar and renders the content on the page (without refreshing the page).
   * @param {string} path the ULR's oath
   * @param {string} content The data-content contained on the HTML elements.
   */
  navigate(path, content) {
    let currentPath = clearSlashes(window.location.pathname);
    if (currentPath === path) {

      return;
    }
    window.history.pushState(null, null, path);
    this.renderContent(content);
  }

  /**
   * Clears the window content and displays the chosen content.
   * @param {string} content The data-content contained on the HTML elements.
   */
  renderContent(content) {
    let contentEl = document.querySelectorAll(`[data-page-content]`)
    for (let i = 0; i < contentEl.length; i++) {
      if (contentEl[i].getAttribute('data-page-content') === content) {
        contentEl[i].classList.add('is-active');
      } else {
        contentEl[i].classList.remove('is-active');
      }
    }
  }
}
