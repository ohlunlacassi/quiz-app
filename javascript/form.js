const form = document.querySelector('[data-js="form"]');
const main = document.querySelector('[data-js="main"]');

function initializeBookmarkButtons(button) {
  button.addEventListener("click", () => {
    button.classList.toggle("dark");
  });
}

function initializeShowAnswerButton(button, answer) {
  button.addEventListener("click", () => {
    answer.classList.toggle("visible");
  });
}

function addQuestion(question, answerText, tag) {
  const section = document.createElement("section");
  section.classList.add("question");

  const divBookmark = document.createElement("div");
  divBookmark.classList.add("bookmarkRibbon");
  divBookmark.dataset.js = "bookmark-button";
  initializeBookmarkButtons(divBookmark);

  const headline = document.createElement("h2");
  headline.innerText = question;

  const divButtonContainer = document.createElement("div");
  divButtonContainer.classList.add("button-container");

  const button = document.createElement("button");
  button.classList.add("show-answer");
  button.dataset.js = "show-answer-button";
  button.textContent = "Show Answer";
  initializeShowAnswerButton(
    button,
    section.querySelector('[data-js="answer"]')
  );

  const divAnswer = document.createElement("div");
  divAnswer.classList.add("answer");
  divAnswer.dataset.js = "answer";
  divAnswer.innerText = answerText;

  const divTagContainer = document.createElement("div");
  divTagContainer.classList.add("tag-container");

  const paragraph = document.createElement("p");
  paragraph.classList.add("tag");
  paragraph.innerText = `#${tag}`;

  main.appendChild(section);
  section.append(
    divBookmark,
    headline,
    divButtonContainer,
    divAnswer,
    divTagContainer
  );
  divButtonContainer.appendChild(button);
  divTagContainer.appendChild(paragraph);
  section.appendChild("form");
}

form.addEventListener("submit", (event) => {
  event.preventDefault();
  const yourQuestion = event.target.question.value;
  const yourAnswer = event.target.answer.value;
  const tag = event.target.tag.value;
  addQuestion(yourQuestion, yourAnswer, tag);
});

const messageInput = document.querySelectorAll('[data-js="message"]');
const charactersLeftElement = document.querySelector(
  '[data-js="remaining-characters"]'
);

messageInput.forEach((message) => {
  message.addEventListener("input", (event) => {
    charactersLeftElement.textContent =
      150 - parseInt(event.target.value.length, 10);
  });
});
