import React from "react";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import TabNavigator from "./src/navigation/TabNavigator";

const App = () => {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <TabNavigator />
    </GestureHandlerRootView>
  );
};

export default App;
