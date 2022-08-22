import React, { useState } from "react";
import "./App.css";
import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";

import { HomeScreen } from "./screens/Home";
import { ThemeContext } from "./context/theme";
import { themeOptions, apollo_config, styles } from "./config";

const client = new ApolloClient({
  uri: apollo_config.uri,
  cache: new InMemoryCache(),
});

function App() {
  const existingTheme = localStorage.getItem("theme");
  const [theme, setTheme] = useState(existingTheme || themeOptions.dark);

  const setThemeValue = (data) => {
    localStorage.setItem("theme", data);
    setTheme(data);
  };

  return (
    <ApolloProvider client={client}>
      <ThemeContext.Provider value={{ theme, setTheme: setThemeValue }}>
        <link
          rel="stylesheet"
          type="text/css"
          href={theme === themeOptions.dark ? styles.darkly : styles.united}
        />

        <div className="App">
          <HomeScreen />
        </div>
      </ThemeContext.Provider>
    </ApolloProvider>
  );
}

export default App;
