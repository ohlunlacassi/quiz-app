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

const form = document.querySelector('[data-js="form"]');

function addQuestion(text, number) {
  const section = document.createElement("section");
  section.classList.add("question");

  const divBookmark = document.createElement("div");
  divBookmark.classList.add("bookmarkRibbon");
  section.appendChild(divBookmark);

  const headline = document.createElement("h2");
  headline.innerText = text;
  section.appendChild(headline);

  const divButtonContainer = document.createElement("div");
  divButtonContainer.classList.add("button-container");

  const button = document.createElement("button");
  button.classList.add("show-answer");
  button.textContent = "Show Answer";
  button.dataset.js = "show-answer-button";
  divButtonContainer.appendChild(button);

  const anchor = document.createElement("a");
  anchor.href = `#answer${number}`;
  button.appendChild(anchor);

  const divAnswer = document.createElement("div");
  divAnswer.classList.add("answer", `#answer${number}`);
  divAnswer.dataset.js = "answer";
  divAnswer.innerText = text;
  section.appendChild(divAnswer);

  const divTagContainer = document.createElement("div");
  divTagContainer.classList.add("tag-container");

  const paragraph = document.createElement("p");
  paragraph.classList.add("tag");
  paragraph.innerText = tag;
  divTagContainer.appendChild(paragraph);

  section.appendChild(divTagContainer);

  document.body.appendChild(section);
}

form.addEventListener("submit", (event) => {
  event.preventDefault();
  const yourQuestion = event.target.question.value;
  const yourAnswer = event.target.answer.value;
  const tag = event.target.tag.value;
  addQuestion(yourQuestion, yourAnswer, tag);
});
