const themeSwitchButton = document.querySelector("#themeSwitchButton");
const pdfDownloadButton = document.querySelector("#pdfDownloadButton");

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

const downloadPdf = () => {
  const source = window.document.getElementsByClassName("container")[0];
  const content = source.innerHTML;

  const printWindow = window.open();
  printWindow.document.write(`
    <html>
      <head>
        <title>Aleksa Jovicic CV</title>
        <link rel="stylesheet" href="./main.css" />
        <style>
          html {
            margin: 10px;
          }
          html, body {
            background-color: var(--secondaryBackgroundColor);
          }
        </style>
      </head>
      <body>
        ${content}
      </body>
    </html>
  `);
  printWindow.document.close();
  printWindow.print();
}

themeSwitchButton.onclick = () => setTheme(!isDark());
pdfDownloadButton.onclick = () => downloadPdf()

setTheme(isDarkModePreferred());
