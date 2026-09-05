const THEME_KEY = "theme";
const THEME_MODE_KEY = "theme-mode";

type Theme = "light" | "dark";
type ThemeMode = Theme | "system";
type LegacyMediaQueryList = {
  addListener?: (listener: () => void) => void;
};

const root = document.documentElement;
const themeButton = document.getElementById("theme-toggle");
const themeColor = document.querySelector<HTMLMetaElement>('meta[name="theme-color"]');
const colorScheme = window.matchMedia("(prefers-color-scheme: dark)");

const isTheme = (value: string | null): value is Theme => value === "light" || value === "dark";
const isThemeMode = (value: string | null): value is ThemeMode => value === "system" || isTheme(value);
const getSystemTheme = (): Theme => (colorScheme.matches ? "dark" : "light");
const resolveTheme = (mode: ThemeMode): Theme => (mode === "system" ? getSystemTheme() : mode);

const readThemeMode = (): ThemeMode => {
  try {
    const storedMode = localStorage.getItem(THEME_MODE_KEY);
    if (isThemeMode(storedMode)) return storedMode;

    const legacyTheme = localStorage.getItem(THEME_KEY);
    if (isTheme(legacyTheme)) return legacyTheme;
  } catch {}

  return "system";
};

const writeThemeMode = (mode: ThemeMode) => {
  try {
    localStorage.setItem(THEME_MODE_KEY, mode);

    if (mode === "system") {
      localStorage.removeItem(THEME_KEY);
    } else {
      localStorage.setItem(THEME_KEY, mode);
    }
  } catch {}
};

const getNextThemeMode = (mode: ThemeMode): ThemeMode => {
  if (mode === "system") return "light";
  if (mode === "light") return "dark";
  return "system";
};

const getThemeModeLabel = (mode: ThemeMode, theme: Theme) => {
  if (mode === "system") return "跟随系统";

  return theme === "dark" ? "深色模式" : "浅色模式";
};

let activeThemeMode = readThemeMode();

const applyTheme = (theme: Theme, mode: ThemeMode = activeThemeMode) => {
  root.dataset.theme = theme;
  root.dataset.themeMode = mode;
  themeColor?.setAttribute("content", theme === "dark" ? "#1a1a1a" : "#fcfcfc");

  if (!themeButton) return;

  themeButton.setAttribute("aria-pressed", mode === "system" ? "mixed" : String(theme === "dark"));
  const label = getThemeModeLabel(mode, theme);
  themeButton.setAttribute("aria-label", label);
  themeButton.setAttribute("data-tooltip", label);
};

const setThemeMode = (mode: ThemeMode, persist = true) => {
  activeThemeMode = mode;
  applyTheme(resolveTheme(mode), mode);
  if (persist) writeThemeMode(mode);
};

const syncSystemTheme = () => {
  if (activeThemeMode === "system") setThemeMode("system", false);
};

setThemeMode(activeThemeMode, false);
themeButton?.addEventListener("click", () => setThemeMode(getNextThemeMode(activeThemeMode)));

if (typeof colorScheme.addEventListener === "function") {
  colorScheme.addEventListener("change", syncSystemTheme);
} else {
  (colorScheme as unknown as LegacyMediaQueryList).addListener?.(syncSystemTheme);
}

export {};
