import React from 'react';
import "./App.css";
import Main from "./containers/Main";
import { ThemeProvider } from 'styled-components';
import { useDarkMode } from './components/footer/useDarkMode';
import { blueTheme, darkTheme } from './theme';
import { GlobalStyles } from './global';
import Toggle from './components/footer/Toggle';
import Footer from "./components/footer/Footer";

function App() {
  const [theme, toggleTheme, componentMounted] = useDarkMode();
  const themeMode = theme === 'light' ? blueTheme : darkTheme;

  if (!componentMounted) {
    return <div />;
  }

  return (
    <ThemeProvider theme={themeMode}>
      <>
        <GlobalStyles />
        <div>
          <Main theme={themeMode} />
        </div>
        <Toggle theme={theme} toggleTheme={toggleTheme} />
        <Footer theme={themeMode} />
      </>
    </ThemeProvider>
  );
}

export default App;
