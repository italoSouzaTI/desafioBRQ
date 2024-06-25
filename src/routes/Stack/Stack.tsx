import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { DetailsItem } from "@features/index";
const Stack = createNativeStackNavigator();
type TPageStackRoutes = {
  DetailsItem: undefined;
};

export function StackNavigation<TPageStackRoutes>() {
  return (
    <Stack.Navigator>
      <Stack.Group
        screenOptions={{
          headerShown: false,
          gestureEnabled: false,
        }}>
        <Stack.Screen name={"DetailsItem"} component={DetailsItem} />
      </Stack.Group>
    </Stack.Navigator>
  );
}
