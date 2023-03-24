const setTheme = (currentTheme) => {
  // console.log(currentTheme);
  // console.log(document.styleSheets);

  const SelectedCssProps = Array.from(document.styleSheets).reduce(
    (preStyleSheet, currentStyleSheet) =>
      (preStyleSheet = [
        ...preStyleSheet,
        ...Array.from(currentStyleSheet.cssRules).reduce(
          (prevCssRule, currCssRule) => {
            prevCssRule =
              currCssRule.selectorText === ":root"
                ? [
                    ...prevCssRule,
                    ...Array.from(currCssRule.style).filter((item) =>
                      item.startsWith("--selected")
                    ),
                  ]
                : prevCssRule;
            console.log(prevCssRule, currCssRule);
            return prevCssRule;
          },

          []
        ),
      ]),
    []
  );
  console.log(SelectedCssProps);
  SelectedCssProps.forEach((value) => {
    document.documentElement.style.setProperty(
      value,
      `var(--${currentTheme}${value.substring(10)})`
    );
  });
};
export default setTheme;
