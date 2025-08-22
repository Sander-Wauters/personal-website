import { useEffect, useState } from "react";

// These should correspond to the files in the "./themes" directory.
const themes = ["gruvbox-dark", "gruvbox-light"];

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
    <label>
      Theme:{" "}
      <select
        name="theme"
        value={currentTheme}
        onChange={(e) => handleChangeTheme(e.currentTarget.value)}
      >
        {themes.map((theme) => (
          <option key={theme} value={theme}>
            {theme}
          </option>
        ))}
      </select>
    </label>
  );
};
