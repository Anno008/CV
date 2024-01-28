const themeSwitchButton = document.querySelector("#themeSwitch");
const lightSvg = document.querySelector(".sun");
const darkSvg = document.querySelector(".moon");

const isDark = () => document.body.classList.contains("dark");

const isDarkModePreferred = () =>
  window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;

const setTheme = (isDarkTheme) => {
  document.body.classList.toggle("dark", isDarkTheme);
  lightSvg.style.display = isDarkTheme ? "block" : "none";
  darkSvg.style.display = isDarkTheme ? "none" : "block";
};

themeSwitchButton.onclick = () => setTheme(!isDark());
setTheme(isDarkModePreferred());
