import React from "react";
import { View, Text, StyleSheet, Button, TouchableOpacity } from "react-native";
import MyButton from "./src/MyButton";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      diceNumber: "Welcome To Dice",
    };
  }
  generateDice = () => {
    this.setState({ diceNumber: String(Math.floor(Math.random() * 6) + 1) });
  };

  resetText = () => {
    this.setState({ diceNumber: "Welcome To Dice" });
  };

  render() {
    return (
      <View style={styles.viewStyle}>
        <Text style={styles.textStyle}>{this.state.diceNumber}</Text>
        <View style={styles.viewStyleButton}>
          <TouchableOpacity
            style={styles.buttonStyle}
            onPress={this.generateDice}
          >
            <Text style={styles.textStyleButton}>Click ME</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.buttonStyle} onPress={this.resetText}>
            <Text style={styles.textStyleButton}>Reset</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  viewStyle: {
    justifyContent: "center",
    alignItems: "center",
    flex: 1,
    justifyContent: "space-around",
    fontFamily: "Menlo",
  },
  textStyle: {
    fontWeight: "bold",
    fontSize: 50,
    textAlign: "center",
  },
  viewStyleButton: {
    shadowColor: "purple",
    shadowOffset: { width: 5, height: 10 },
    shadowRadius: 10,
    shadowOpacity: 0.6,

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
    margin: 20,
  },
  textStyleButton: {
    fontWeight: "bold",
    color: "white",
    textTransform: "uppercase",
  },
});

export default App;
