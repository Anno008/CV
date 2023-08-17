const themeSwitchButton = document.getElementById("themeSwitch");
const lightSvg = document.getElementsByClassName("sun")[0];
const darkSvg = document.getElementsByClassName("moon")[0]

const isDark = () => document.getElementsByClassName("dark").length > 0;

const setTheme = (isDarkTheme) => {
  const body = document.body;

  if (isDarkTheme) {
    body.classList.add("dark");
    lightSvg.style.display = "block";
    darkSvg.style.display = "none";
  } else {
    body.classList.remove("dark");
    lightSvg.style.display = "none";
    darkSvg.style.display = "block";
  }
};

const isDarkModePreferred = () => 
  window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;

themeSwitchButton.onclick = () => setTheme(!isDark());
setTheme(isDarkModePreferred());
