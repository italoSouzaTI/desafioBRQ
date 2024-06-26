import { Favorite, List } from "@features/index";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Typography } from "@shared/Typography/Typography";
import { ListDashes, Star } from "phosphor-react-native";
import { useTheme } from "styled-components";
type TPageBottomRoutes = {
  Favorite: undefined;
  List: undefined;
};
const Tab = createBottomTabNavigator<TPageBottomRoutes>();
export function BottomTab() {
  const { PADDING_DEFAULT, colors, TABBOTTOM } = useTheme();
  return (
    <Tab.Navigator
      initialRouteName="List"
      screenOptions={({ route }) => ({
        tabBarStyle: {
          backgroundColor: TABBOTTOM,
          borderTopWidth: 0,
        },
        tabBarLabel: ({ focused }) => {
          if (route.name == "List") {
            return (
              <Typography
                label="List characters"
                option="CAPTION.N_1"
                colorLabel={focused ? colors.YELLOW_MAIN : colors.YELLOW_LIGHTER}
              />
            );
          } else {
            return (
              <Typography
                label="Favorite characters"
                option="CAPTION.N_1"
                colorLabel={focused ? colors.YELLOW_MAIN : colors.YELLOW_LIGHTER}
              />
            );
          }
        },
        tabBarIcon: ({ focused }) => {
          if (route.name == "List") {
            return (
              <ListDashes
                size={PADDING_DEFAULT[24]}
                color={focused ? colors.YELLOW_MAIN : colors.YELLOW_LIGHTER}
                weight={focused ? "fill" : "regular"}
              />
            );
          } else {
            return (
              <Star
                size={PADDING_DEFAULT[24]}
                color={focused ? colors.YELLOW_MAIN : colors.YELLOW_LIGHTER}
                weight={focused ? "fill" : "regular"}
              />
            );
          }
        },
      })}>
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
