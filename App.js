import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer, DefaultTheme } from "@react-navigation/native";
import { useFonts } from "expo-font";
import Home from "./screens/Home";
import Deatils from "./screens/Deatils";
import { Notifications, Permissions } from "expo";

const Stack = createStackNavigator();

const theme = {
  ...DefaultTheme,
  color: {
    ...DefaultTheme.colors,
    background: "transparent",
  },
};

const App = () => {
  Permissions.askAsync(Permissions.NOTIFICATIONS).then((status) => {
    if (status === "granted") {
      Notifications.getDevicePushTokenAsync()
        .then((token) => {
          Alert.alert(
            "This is your token",
            `${token}`,
            [{ text: "OK", onPress: () => console.log("OK Pressed") }],
            { cancelable: false }
          );
        })
        .catch((err) => {});
    }
  });
  const [loaded] = useFonts({
    InterBold: require("./assets/fonts/Inter-Bold.ttf"),
    InterSemiBold: require("./assets/fonts/Inter-SemiBold.ttf"),
    InterMedium: require("./assets/fonts/Inter-Medium.ttf"),
    InterRegular: require("./assets/fonts/Inter-Regular.ttf"),
    InterLight: require("./assets/fonts/Inter-Light.ttf"),
  });
  if (!loaded) return null;
  return (
    <NavigationContainer theme={theme}>
      <Stack.Navigator
        screenOptions={{ headerShown: false }}
        initialRouteName="Home"
      >
        <Stack.Screen name="Home" component={Home}></Stack.Screen>
        <Stack.Screen name="Deatils" component={Deatils}></Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
