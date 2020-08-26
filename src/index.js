import Router from "./router/router";

const router = new Router({
  path: 'what-is-vegemite',
  content: 'what-is-vegemite'
});

router.create('what-is-vegemite', 'what-is-vegemite');
router.create('recipes', 'recipes');
router.create('ingredients', 'ingredients');


function handleMenuActive() {
  console.log('ow')
}
handleMenuActive()
