const bookmarkButtons = document.querySelectorAll(
  '[data-js="bookmark-button"]'
);

bookmarkButtons.forEach((button) => {
  button.addEventListener("click", () => {
    button.classList.toggle("dark");
  });
});
