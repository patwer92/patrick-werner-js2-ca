import { container } from "../script.js";

export function createHtml(article) {
  return `<div class="articles-container">
              <h4>${article.title}</h4>
              <p><span>Author:</span> ${article.author}</p>
              <p><span>Summary:</span> ${article.summary}</p>
              <button data-id="${article.id}">Hide/show</button>
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
