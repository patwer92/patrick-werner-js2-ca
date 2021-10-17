import { getFromApi } from "./components/getFromApi.js";
import { createListHtml } from "./components/createHtml.js";
import { handleClick } from "./components/onToggle.js";
import { searchArticle } from "./components/searchArticles.js";

export const container = document.querySelector(".container");

let allArticles = [];

async function setup() {
  allArticles = await getFromApi();
  createListHtml(allArticles);
  searchArticle(allArticles);
  const buttons = document.querySelectorAll("i");
  buttons.forEach((button) => {
    button.addEventListener("click", handleClick);
  });
}

setup();
