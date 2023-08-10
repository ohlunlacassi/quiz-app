const bookmarkButtons = document.querySelectorAll(
  '[data-js="bookmark-button"]'
);

bookmarkButtons.forEach((button) => {
  button.addEventListener("click", () => {
    button.classList.toggle("dark");
  });
});

const showAnswerButton = document.querySelectorAll(
  '[data-js="show-answer-button"]'
);
const answer = document.querySelectorAll('[data-js="answer"]');

showAnswerButton.forEach((button, index) => {
  button.addEventListener("click", () => {
    answer[index].classList.toggle("visible");
  });
});
