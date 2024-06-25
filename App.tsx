import "react-native-gesture-handler";

import React from "react";

import { NavigationContainer } from "@react-navigation/native";
import { BottomTab } from "@routes/BottomTab/BottomTab";

import "./ReactotronConfig";

// import { Container } from './styles';

const App: React.FC = () => {
  return (
    <NavigationContainer>
      <BottomTab />
    </NavigationContainer>
  );
};

export default App;
