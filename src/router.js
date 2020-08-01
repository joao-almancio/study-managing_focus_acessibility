export class Router {
  options = {
    mode: null,
    root: '/',
  }
  constructor(options = this.options) {
    let {mode, root} = options;
    this.mode = window.history.pushState ?  'history' : 'hash';
    mode ? this.mode = mode : this.mode;
    root ? this.root = root : this.root;
  }

  clearSlashes = path => {
    return path.toString().replace(/\/$/, '').replace(/^\//, '');
  }

  navigate = (path = '') => {
    if (this.mode === 'history') {
      window.history.pushState(null, '', this.root + this.clearSlashes(path));
    } 
    else {
      window.location.href = `${window.location.href.replace(/#(.*)$/, '')}#${path}`
    }
    return this;
  }
}
