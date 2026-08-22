// Runs before hydration (via a blocking next/script in layout.tsx) so the
// correct theme is already applied at first paint — no flash of the wrong
// theme. Defaults to dark until the user makes an explicit choice, stored
// under the same key ThemeToggle reads/writes.
export const themeInitScript = `
(function () {
  try {
    var stored = localStorage.getItem('portfolio-theme');
    if (stored !== 'light') document.documentElement.classList.add('dark');
  } catch (e) {
    document.documentElement.classList.add('dark');
  }
})();
`;
