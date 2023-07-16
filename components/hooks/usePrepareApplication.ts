import { useEffect, useState, useCallback } from "react";
import * as SplashScreen from "expo-splash-screen";
import * as Font from "expo-font";

const usePrepareApplication = () => {
  const [appIsReady, setAppIsReady] = useState(false);
  useEffect(() => {
    const prepare = async () => {
      try {
        await Font.loadAsync({
          "fira-sans": require("../../assets/fonts/FiraSans-Medium.ttf"),
        });
      } catch (error) {
        console.warn(error);
      } finally {
        setAppIsReady(true);
      }
    };
    prepare();
  }, []);

  const onLayoutRootView = useCallback(async () => {
    if (appIsReady) {
      await SplashScreen.hideAsync();
    }
  }, [appIsReady]);

  return [appIsReady, onLayoutRootView] as [boolean, () => Promise<void>];
};

export default usePrepareApplication;
