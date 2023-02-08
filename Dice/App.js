import React from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  SafeAreaView,
} from "react-native";
import MyButton from "./src/MyButton";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      diceNumber: "Welcome To Dice",
      uri: require("./assets/dice1.png"),
      uri2: require("./assets/dice1.png"),
    };
  }
  generateDice = () => {
    var diceValue = Math.floor(Math.random() * 6) + 1;
    switch (diceValue) {
      case 1:
        this.setState({ uri: require("./assets/dice1.png") });
        break;
      case 2:
        this.setState({ uri: require("./assets/dice2.png") });
        break;
      case 3:
        this.setState({ uri: require("./assets/dice3.png") });
        break;
      case 4:
        this.setState({ uri: require("./assets/dice4.png") });
        break;
      case 5:
        this.setState({ uri: require("./assets/dice5.png") });
        break;
      case 6:
        this.setState({ uri: require("./assets/dice6.png") });
        break;
    }
    this.generateDice2();
  };

  generateDice2 = () => {
    var diceValue = Math.floor(Math.random() * 6) + 1;
    switch (diceValue) {
      case 1:
        this.setState({ uri2: require("./assets/dice1.png") });
        break;
      case 2:
        this.setState({ uri2: require("./assets/dice2.png") });
        break;
      case 3:
        this.setState({ uri2: require("./assets/dice3.png") });
        break;
      case 4:
        this.setState({ uri2: require("./assets/dice4.png") });
        break;
      case 5:
        this.setState({ uri2: require("./assets/dice5.png") });
        break;
      case 6:
        this.setState({ uri2: require("./assets/dice6.png") });
        break;
    }
  };

  resetText = () => {
    this.setState({ uri: require("./assets/dice1.png") });
    this.setState({ uri2: require("./assets/dice1.png") });
  };

  render() {
    return (
      <SafeAreaView style={styles.viewStyle}>
        <View style={styles.centerStyle}>
          <Text style={[styles.textStyle]}>{this.state.diceNumber}</Text>
        </View>
        <View style={[styles.imageView, styles.centerStyle]}>
          <Image source={this.state.uri} style={styles.imageFit}></Image>
          <Image source={this.state.uri2} style={styles.imageFit}></Image>
        </View>

        <View style={[styles.viewStyleButton, styles.centerStyle]}>
          <TouchableOpacity
            style={styles.buttonStyle}
            onPress={this.generateDice}
          >
            <Text style={styles.textStyleButton}>Roll</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.buttonStyle} onPress={this.resetText}>
            <Text style={styles.textStyleButton}>Reset</Text>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  centerStyle: {
    marginTop: 65,
    // justifyContent: "center",
    alignItems: "center",
  },
  viewStyle: {
    flex: 1,
    fontFamily: "Menlo",
  },
  viewStyleButton: {
    shadowColor: "purple",
    shadowOffset: { width: 5, height: 10 },
    shadowRadius: 10,
    shadowOpacity: 0.6,
    flex: 1,
  },
  imageView: {
    flex: 1,
    width: "100%",
    flexDirection: "row",
    shadowColor: "#05b8ff",
    shadowOffset: { width: 0, height: 0 },
    shadowRadius: 10,
    shadowOpacity: 0.5,
    justifyContent: "space-around",
  },
  textStyle: {
    fontWeight: "bold",
    fontSize: 50,
    textAlign: "center",
  },

  buttonStyle: {
    width: 140,
    height: 50,
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
  imageFit: {
    resizeMode: "contain",
    width: "40%",
  },
});

export default App;
