import { useEffect, useState } from "react";

// These should correspond to the files in the "./themes" directory.
const themes = ["gruvbox-dark", "gruvbox-light"] as const;

const parseCurrentTheme = (href: string) => href.substring(7).split(".css")[0];

export const ThemeSelect = () => {
  const themeLink = document.getElementById("theme-stylesheet-link")!;

  const [currentTheme, setCurrentTheme] = useState<string>(
    localStorage.getItem("theme") ??
      parseCurrentTheme(themeLink.getAttribute("href")!),
  );

  const handleChangeTheme = (theme: string) => {
    setCurrentTheme(theme);
    localStorage.setItem("theme", theme);
    themeLink.setAttribute("href", `./themes/${theme}.css`);
  };

  useEffect(() => {
    handleChangeTheme(currentTheme);
  });

  return (
    <div className="row">
      <strong>Theme</strong>:
      <ul className="inline-list">
        {themes.map((theme) => (
          <li key={theme}>
            {currentTheme === theme ? "| " : ""}
            <button
              className="styled-button"
              onClick={() => handleChangeTheme(theme)}
            >
              {theme}
            </button>
            {currentTheme === theme ? " |" : ""}
          </li>
        ))}
      </ul>
    </div>
  );
};
