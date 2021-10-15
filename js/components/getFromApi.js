import displayMessage from "./common/displayMessage.js";
import { baseUrl } from "../settings/api.js";
import { container } from "../script.js";

const articlesUrl = baseUrl + "articles";

export async function getFromApi() {
  try {
    const response = await fetch(articlesUrl);
    return await response.json();
  } catch (error) {
    console.log(error);
    container.innerHTML = "";
    displayMessage("error", error, ".message-container");
  }
}
