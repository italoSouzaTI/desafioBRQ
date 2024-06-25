import { Favorite, List } from "@features/index";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
type TPageBottomRoutes = {
  Favorite: undefined;
  List: undefined;
};
const Tab = createBottomTabNavigator<TPageBottomRoutes>();
export function BottomTab() {
  return (
    <Tab.Navigator>
      <Tab.Group
        screenOptions={{
          headerShown: false,
        }}>
        <Tab.Screen name="List" component={List} />
        <Tab.Screen name="Favorite" component={Favorite} />
      </Tab.Group>
    </Tab.Navigator>
  );
}
