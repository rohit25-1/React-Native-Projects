import React from "react";
import { View, Text, StyleSheet } from "react-native";

class MyButton extends React.Component {
  render() {
    return (
      <View style={style.viewStyling}>
        <Text style={style.textStyling}>{this.props.name}</Text>
      </View>
    );
  }
}

const style = StyleSheet.create({
  viewStyling: {
    marginBottom: 30,
    elevation: 10,
    shadowColor: "#8DCBE6",
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0.3,
    shadowRadius: 20,
  },
  textStyling: {
    backgroundColor: "#FFEA20",
    padding: 20,
    width: "60%",
    paddingHorizontal: 50,
    border: "none",
    borderRadius: "20%",
    color: "black",
    overflow: "hidden",
    fontWeight: "bold",
  },
});

export default MyButton;
