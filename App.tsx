import { StatusBar } from "expo-status-bar";
import { NavigationContainer } from "@react-navigation/native";
import Navigation from "./src/Navigation";
import { useFonts } from "expo-font";
import * as SplashScreen from "expo-splash-screen";
import { useCallback } from "react";
import { View } from "react-native";
import { ModalProvider } from "./src/tools/ModalProvider";
import { TaskProvider } from "./src/tools/TaskProvider";
import CreatePotion from "./src/components/CreatePotion";
import BannerNotification from "./src/components/BannerNotification";
SplashScreen.preventAutoHideAsync();
export default function App() {
  const [fontsLoaded] = useFonts({
    Ambassador: require("./assets/Ambassador.otf"),
  });

  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  if (!fontsLoaded) {
    return null;
  }
  console.log("font loaded", fontsLoaded);
  return (
    <View
      style={{ flex: 1, backgroundColor: "#f3f4f6" }}
      onLayout={onLayoutRootView}
    >
      <TaskProvider>
        <ModalProvider>
          <NavigationContainer>
            <Navigation />
            <CreatePotion />
          </NavigationContainer>
        </ModalProvider>
      </TaskProvider>
    </View>
  );
}
