import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";
import MyButton from "./src/MyButton";
import BigText from "./src/BigText";

const App = () => {
  return (
    <View style={styles.container}>
      <View
        style={{
          shadowColor: "white",
          shadowOffset: { width: 0, height: 0 },
          shadowOpacity: 0.2,
          shadowRadius: 20,
        }}
      >
        <Image
          style={{
            width: 150,
            height: 150,
            borderRadius: 100,
            marginBottom: 200,
            shadowColor: "#8DCBE6",
            shadowOffset: { width: 0, height: 0 },
            shadowOpacity: 1,
            shadowRadius: 50,
          }}
          source={require("./src/79148508.jpeg")}
        ></Image>
      </View>

      <Text style={styles.textStyle}>
        Welcome <BigText name="Rohit" />
      </Text>
      <MyButton name="Student Login" />
      <MyButton name="Teacher Login" />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#0E1117",
    alignItems: "center",
    justifyContent: "center",
  },
  textStyle: {
    fontSize: "24",
    color: "white",
    fontFamily: "Menlo",
    position: "relative",
    bottom: "20%",
    textAlign: "center",
  },
  navStyling: {
    backgroundColor: "black",
    height: "10%",
    width: "100%",
    position: "absolute",
    top: "0%",
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  navText: {
    fontSize: 20,
    color: "white",
    position: "relative",
    top: "15%",
  },
});

export default App;
