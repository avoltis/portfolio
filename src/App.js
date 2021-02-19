import React, { useState } from "react";
import "./App.css";
import ApolloClient from "apollo-boost";
import { ApolloProvider } from "react-apollo";

import { HomeScreen } from "./screens/Home";
import { ThemeContext } from "./context/theme";
import { themeOptions, apollo_config, styles } from "./config";

const client = new ApolloClient({
  uri: apollo_config.uri,
});

function App() {
  const existingTheme = localStorage.getItem("theme");
  const [theme, setTheme] = useState(existingTheme || themeOptions.dark);

  const setThemeValue = (data) => {
    localStorage.setItem("theme", data);
    setTheme(data);
  };

  const [stylesLoaded, onStylesUpdate] = useState(false);
  const onStyleLoad = () => onStylesUpdate(true);

  return (
    <ApolloProvider client={client}>
      <ThemeContext.Provider value={{ theme, setTheme: setThemeValue }}>
        <link
          rel="stylesheet"
          type="text/css"
          onLoad={onStyleLoad}
          href={theme === themeOptions.dark ? styles.darkly : styles.united}
        />

        <div className="App">
          <HomeScreen stylesLoaded={stylesLoaded} />
        </div>
      </ThemeContext.Provider>
    </ApolloProvider>
  );
}

export default App;
