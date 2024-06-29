import "react-native-gesture-handler";
import React from "react";
import { StatusBar } from "react-native";

import theme from "@core/Theme/Theme";
import { NavigationContainer } from "@react-navigation/native";
import { StackNavigation } from "@routes/Stack/Stack";
import { ThemeProvider } from "styled-components/native";

import "./ReactotronConfig";

const App: React.FC = () => {
  return (
    <ThemeProvider theme={theme}>
      <StatusBar barStyle="light-content" backgroundColor="transparent" translucent />
      <NavigationContainer>
        <StackNavigation />
      </NavigationContainer>
    </ThemeProvider>
  );
};

export default App;
