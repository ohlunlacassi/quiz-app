const bookmarkRibbon = document.querySelectorAll('[data-js="bookmark-button"]');

bookmarkRibbon.addEventListener("click", () => {
  bookmarkRibbon.classList.add("dark");
  console.log("Hello");
});
