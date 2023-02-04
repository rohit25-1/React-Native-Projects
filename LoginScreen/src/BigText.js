import React from "react";
import { Text, StyleSheet } from "react-native";

class BigText extends React.Component {
  render() {
    return <Text style={styles.textStyling}>{this.props.name}</Text>;
  }
}
const styles = StyleSheet.create({
  textStyling: {
    color: "white",
    fontSize: 30,
    fontFamily: "Menlo",
    textTransform: "uppercase",
    letterSpacing: 2,
    fontWeight: "bold",
  },
});

export default BigText;
