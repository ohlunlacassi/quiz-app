const bookmarkButtons = document.querySelectorAll(
  '[data-js="bookmark-button"]'
);

bookmarkButtons.forEach((button) => {
  button.addEventListener("click", () => {
    button.classList.toggle("dark");
  });
});

const showAnswerButtons = document.querySelectorAll(
  '[data-js="show-answer-button"]'
);
const answers = document.querySelectorAll('[data-js="answer"]');

showAnswerButtons.forEach((button, index) => {
  button.addEventListener("click", () => {
    answers[index].classList.toggle("visible");
  });
});
