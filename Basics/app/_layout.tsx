import { Stack } from "expo-router";

export default function RootLayout() {
  return (
    <Stack>
      {/* This points to the (tab) folder. 
          It will automatically load whatever is inside (tab)/_layout.tsx */}
      <Stack.Screen name="(tab)" options={{ headerShown: false }} />
    </Stack>
  );
}