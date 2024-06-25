import { DetailsItem } from "@features/index";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
type TPageStackRoutes = {
  DetailsItem: undefined;
};

const Stack = createNativeStackNavigator<TPageStackRoutes>();
export function StackNavigation() {
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
