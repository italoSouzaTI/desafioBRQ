import "react-native-gesture-handler";
import React from "react";
import { StatusBar } from "react-native";

import theme from "@core/Theme/Theme";
import { NavigationContainer } from "@react-navigation/native";
import { BottomTab } from "@routes/BottomTab/BottomTab";
import { ThemeProvider } from "styled-components/native";
import "./ReactotronConfig";

// import { Container } from './styles';

const App: React.FC = () => {
  return (
    <ThemeProvider theme={theme}>
      <StatusBar barStyle="light-content" backgroundColor="transparent" translucent />
      <NavigationContainer>
        <BottomTab />
      </NavigationContainer>
    </ThemeProvider>
  );
};

export default App;
