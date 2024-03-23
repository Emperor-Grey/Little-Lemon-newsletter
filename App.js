import { NavigationContainer } from "@react-navigation/native";
import { StatusBar } from "expo-status-bar";
import RootNavigator from "./navigators/RootNavigator";

// App.js is already setup by wrapping NavigationContainer around Root Navigator
export default function App() {
  return (
    <NavigationContainer>
      <StatusBar translucent backgroundColor={"transparent"} />
      <RootNavigator />
    </NavigationContainer>
  );
}
