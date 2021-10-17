import displayMessage from "./common/displayMessage.js";

export function clearButton() {
  const clearBtn = document.querySelector(".clear-btn");

  clearBtn.addEventListener("click", clearFavourites);

  function clearFavourites() {
    if (confirm("Are you sure you want to clear all favourites?")) {
      localStorage.clear();
      const container = document.querySelector(".container");
      container.innerHTML = [];
      clearBtn.classList.add("display-none");
      displayMessage("warning", "No articles saved in favourites", ".container");
    }
  }
}
