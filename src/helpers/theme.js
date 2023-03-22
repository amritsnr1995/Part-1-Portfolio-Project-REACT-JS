const setTheme = (currentTheme) => {
  console.log(currentTheme);
  console.log(document.styleSheets);

  const selectedCssProps = Array.from(document.styleSheets).reduce(
    (prevStyleSheet, currentStyleSheet) => {
      prevStyleSheet = [
        ...prevStyleSheet,
        ...Array.from(currentStyleSheet.cssRules).reduce(
          (preCssRule, currentCssRule) => {
            return preCssRule
          },[]
        ),
      ];
    }
  );

  return "";
};
export default setTheme;
