import { IPerson } from "@core/Service/People/PeopleTypes";
import { DetailsItem } from "@features/index";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { BottomTab } from "@routes/BottomTab/BottomTab";
export type TPageStackRoutes = {
  Home: undefined;
  DetailsItem: { data: IPerson };
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
        <Stack.Screen name={"Home"} component={BottomTab} />
        <Stack.Screen name={"DetailsItem"} component={DetailsItem} />
      </Stack.Group>
    </Stack.Navigator>
  );
}
