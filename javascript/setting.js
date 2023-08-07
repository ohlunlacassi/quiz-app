const bodyElement = document.querySelector('[data-js="body"]');
const toggleElement = document.querySelector('[data-js="toggle-switch"]');

toggleElement.addEventListener("click", () => {
  toggleElement.classList.toggle("active");
  bodyElement.classList.toggle("dark");
});
