import { Router } from "./router";

const routes = new Router({
  mode: "history",
  root: "/",
});

var navigate = routes.navigate;

var initialPath = routes.clearSlashes(window.location.pathname);
var mainContent = document.querySelectorAll("main [data-page]");

const renderMainContent = function (page) {
  mainContent.forEach((content) => {
    page === content.getAttribute("data-page")
      ? content.classList.add("is-active")
      : content.classList.remove("is-active");
  });
};

const menuItems = document.querySelectorAll("#menu a");
menuItems.forEach((menuItem) => {
  let page = menuItem.getAttribute("data-page");

  if (initialPath === page) {
    menuItem.classList.add("is-active");
  } else if (initialPath === ''){
    menuItems[0].classList.add(isActive);
  } else {
    menuItem.classList.remove("is-active");
  }

  let isActive = menuItem.classList.contains("is-active");

  if (isActive) {
    renderMainContent(page);
  }

  menuItem.addEventListener("click", (event) => {
    menuItems.forEach((item) => {
      item.classList.remove("is-active");
    });
    event.target.classList.add("is-active");
    renderMainContent(page);
    event.preventDefault();
    navigate(event.target.getAttribute("data-page"));
  });
});
