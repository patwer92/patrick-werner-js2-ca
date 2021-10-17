import { container } from "../script.js";
import { getExistingFavs } from "../utils/favFunctions.js";

const favourites = getExistingFavs();

export function createHtml(article) {
  let cssClass = "far";

  const doesObjectExist = favourites.find((fav) => parseInt(fav.id) === article.id);

  if (doesObjectExist) {
    cssClass = "fa";
  }

  return `<div class="articles-container">
              <h4>${article.title}</h4>
              <p><span>Author:</span> ${article.author}</p>
              <p><span>Summary:</span> ${article.summary}</p>
              <div class="fav-container">
                <i class="${cssClass} fa-heart" data-id="${article.id}" data-title="${article.title}" data-author="${article.author}" data-summary="${article.summary}"></i>
              </div>
          </div>`;
}

export function createListHtml(articleList) {
  let html = "";
  articleList.forEach(function (articleList) {
    let article = articleList;
    html += createHtml(article);
  });
  container.innerHTML = html;
}
