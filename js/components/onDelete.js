import { createListHtml } from "./createHtml.js";

export function setDeleteListener(element, articles) {
  element.addEventListener("click", onDelete);
  function onDelete(event) {
    const idToDelete = event.target.dataset.id;
    const filteredArticles = articles.filter((article) => {
      console.log(article.id, parseInt(idToDelete));
      if (parseInt(idToDelete) !== article.id) {
        return true;
      }
    });
    createListHtml(filteredArticles);
    console.log(filteredArticles);
  }
}
