import React from "react";
import { View, TouchableOpacity, StyleSheet, Text } from "react-native";

class MyButton extends React.Component {
  render() {
    return (
      <View style={styles.viewStyle}>
        <TouchableOpacity style={styles.buttonStyle}>
          <Text style={styles.textStyle}>{this.props.name}</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  viewStyle: {
    shadowColor: "purple",
    shadowOffset: { width: 5, height: 10 },
    shadowRadius: 10,
    shadowOpacity: 0.6,
    fontFamily: "Menlo",
    margin: 20,
  },
  buttonStyle: {
    width: 140,
    height: 40,
    padding: 5,
    borderRadius: 10,
    backgroundColor: "black",
    fontSize: 10,
    alignItems: "center",
    justifyContent: "center",
  },
  textStyle: {
    fontWeight: "bold",
    color: "white",
    textTransform: "uppercase",
  },
});

export default MyButton;
