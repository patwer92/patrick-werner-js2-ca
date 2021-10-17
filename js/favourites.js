import displayMessage from "./components/common/displayMessage.js";
import { getExistingFavs } from "./utils/favFunctions.js";
import { clearButton } from "./components/clearButton.js";

const favourites = getExistingFavs();
const container = document.querySelector(".container");
const clearBtn = document.querySelector(".clear-btn");

clearButton();

if (favourites.length === 0) {
  displayMessage("warning", "No articles saved in favourites", ".container");
  clearBtn.classList.add("display-none");
}

favourites.forEach((favourite) => {
  container.innerHTML += `<div class="articles-container">
                                <h4>${favourite.title}</h4>
                                <p><span>Author:</span> ${favourite.author}</p>
                                <p><span>Summary:</span> ${favourite.summary}</p>
                                <div class="fav-container">
                                    <i class="fa fa-heart"></i>
                                </div>
                            </div>`;
});
