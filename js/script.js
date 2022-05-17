const inputElement = document.querySelector("input");

const rootElement = document.documentElement;

const lightTheme = {
  "--background": "hsl(0, 0%, 100%)",
  "--toggle": "hsl(0, 0%, 100%)",
  "--primary-text-color": "hsl(230, 17%, 14%)",
  "--dark-mode-text-color": "hsl(228, 12%, 44%)",
  "--cards-background": "hsl(227, 47%, 96%)",
  "--cards-background-hover": "hsl(240, 33%, 91%)",
};

const darkTheme = {
  "--background": "hsl(232, 19%, 15%)",
  "--toggle": "hsl(231, 24%, 27%)",
  "--primary-text-color": "hsl(0, 0%, 100%)",
  "--dark-mode-text-color": "hsl(0, 0%, 100%)",
  "--cards-background": " hsl(222, 21%, 18%)",
  "--cards-background-hover": " hsl(228, 25%, 26%)",
};

function changeTheme(theme) {
  for (let prop in theme) {
    changeProperty(prop, theme[prop]);
  }
}

function changeProperty(property, value) {
  rootElement.style.setProperty(property, value);
}

inputElement.addEventListener("change", function () {
  const isChecked = inputElement.checked;

  isChecked ? changeTheme(darkTheme) : changeTheme(lightTheme);
});
