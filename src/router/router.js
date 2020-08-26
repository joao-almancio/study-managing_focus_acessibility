import { clearSlashes, isUnique } from './utils/router-utils';
import RouterModules from './modules/router-modules';

/** Cria uma instancia de um genrenciador de rotas */
export default class Router extends RouterModules {
  root = {
    path: "",
    content: "",
  };

  routes = [];

  /**
   * Inicializador
   * @param {import('./modules/router-modules').Route} root Rota inicial
   */
  constructor(root) {
    super(root);
    this.root = {
      path: clearSlashes(root.path),
      content: root.content,
    };
  }

  /**
   * Creates the route and register as a valid one.
   * @param {string} path The name of the route that is going to be exibited on the browser
   * @param {string} content the 'data-content' value that is on the HTML content
   */
  create(path, content) {
    if (isUnique.call(this, path, content)) {
      this.addRoute.call(this, path, content);
      this.addNavigation(path, content);
    }
  }
}


