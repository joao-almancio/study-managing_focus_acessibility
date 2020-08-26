import Router from "./router/router";
import { getCurrentPath } from './router/utils/router-utils';

const router = new Router({
  path: 'what-is-vegemite',
  content: 'what-is-vegemite'
});

router.create('what-is-vegemite', 'what-is-vegemite');
router.create('recipes', 'recipes');
router.create('ingredients', 'ingredients');

var firstLoad = true;
function handleMenuActive() {
  let navElements = document.querySelectorAll('#menu [data-page]');

  const renderActive = function () {
    for (let i = 0; i < navElements.length; i++) {
      if (navElements[i].getAttribute('data-page') === getCurrentPath()) {
        navElements[i].classList.add('is-active');
        if (!firstLoad) {
          handleHeaderFocus(getCurrentPath());
        } else if (getCurrentPath() !== router.root.path){
          handleHeaderFocus(getCurrentPath());
          firstLoad = false;
        }
      } else {
        navElements[i].classList.remove('is-active');
      }
    }
  }

  for (let i = 0; i < navElements.length; i++) {
    navElements[i].addEventListener('click', () => {
      renderActive();
    })
  }
  renderActive();
}
handleMenuActive();

function handleHeaderFocus(dataContent) {
  let contentElement = document.querySelector(`[data-page-content=${dataContent}]`);
  let headerElement = contentElement.querySelector('h2');
  headerElement.tabIndex = 0;
  headerElement.focus();
}
