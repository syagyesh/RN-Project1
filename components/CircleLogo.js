import React from "react";
import { View, Image } from "react-native";


export default function CircleLogo() {
  return (
    <View
        style={{
            justifyContent: "center",
            alignItems: "center",
        }}>
        <Image source={require("../assets/logo.png")}
        style={{
            width: 100,
            height: 100,
            marginVertical: 40,
        }}
        ></Image>
    </View>
  );
}
