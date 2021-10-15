import { createListHtml } from "./components/createHtml.js";
import { getFromApi } from "./components/getFromApi.js";
import { setDeleteListener } from "./components/onDelete.js";

export const container = document.querySelector(".container");

let allArticles = [];

async function setup() {
  allArticles = await getFromApi();
  createListHtml(allArticles);
  const buttons = document.querySelectorAll("button");
  buttons.forEach((button) => setDeleteListener(button, allArticles));
}

setup();
