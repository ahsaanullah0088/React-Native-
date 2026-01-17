import { Drawer } from "expo-router/drawer";
import { GestureHandlerRootView } from "react-native-gesture-handler";

export default function DrawerLayout() {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <Drawer>
        {/* name="(tab)" matches the folder name inside (drawer) */}
        <Drawer.Screen 
          name="(tab)" 
          options={{ drawerLabel: "Home", title: "My App" }} 
        />
      </Drawer>
    </GestureHandlerRootView>
  );
}