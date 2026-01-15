import { Stack } from "expo-router";
import React from "react";

const RootLayout = ()=>{
    return(
        <Stack>
            <Stack.Screen
                name="index"
                options={{
                    title: "Home",
                }}
            />
            <Stack.Screen
                name="about"
                options={{
                    title: "About",
                }}
            />
        </Stack>
    );
};

export default RootLayout;