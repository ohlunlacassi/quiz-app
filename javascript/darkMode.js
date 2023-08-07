function setDarkModePreference(value) {
  localStorage.setItem("darkMode", value);
}

function getDarkModePreference() {
  return localStorage.getItem("darkMode");
}

function initializeDarkMode() {
  const darkModePreference = getDarkModePreference();

  if (darkModePreference === "true") {
    document.body.classList.add("dark");
  }
}

export { initializeDarkMode };
