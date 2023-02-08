import React from "react";
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
} from "react-native";
import MyButton from "./src/MyButton";

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      currencyValue: 0,
      inputtedValue: 0,
    };
  }

  getRate = (name) => {
    const currencies = {
      Dollar: 82.63,
      Dirham: 22.5,
      Pound: 100,
      Bitcoin: 1800000,
    };
    return currencies[name];
  };

  convertCurrency = (name) => {
    let value = this.getRate(name);
    switch (name) {
      case "Dollar":
        this.setState({
          currencyValue:
            "$ " +
            String((parseInt(this.state.inputtedValue) / value).toFixed(2)),
        });
        break;
      case "Pound":
        this.setState({
          currencyValue:
            String((parseInt(this.state.inputtedValue) / value).toFixed(2)) +
            " Pounds",
        });
        break;
      case "Dirham":
        this.setState({
          currencyValue:
            "AED " +
            String((parseInt(this.state.inputtedValue) / value).toFixed(2)),
        });
        break;
      case "Bitcoin":
        this.setState({
          currencyValue:
            String((parseInt(this.state.inputtedValue) / value).toFixed(2)) +
            " BTC",
        });
        break;
    }
  };

  render() {
    return (
      <View style={styles.viewStyle}>
        <Text style={styles.resText}>{this.state.currencyValue}</Text>
        <View
          style={{
            flex: 0.1,
            width: "100%",
            alignItems: "center",
          }}
        >
          <Text
            style={{
              color: "white",
              position: "relative",
              right: 65,
              margin: 7,
            }}
          >
            ENTER VALUE IN RUPEES
          </Text>
          <TextInput
            keyboardType="number-pad"
            style={styles.textInput}
            onChangeText={(inputText) =>
              this.setState({ inputtedValue: inputText })
            }
          ></TextInput>
        </View>

        <View style={styles.viewStyleButton}>
          <TouchableOpacity
            style={styles.buttonStyle}
            onPress={() => this.convertCurrency("Dollar")}
          >
            <Text style={styles.textStyle}>CONVERT TO $</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.buttonStyle}
            onPress={() => this.convertCurrency("Pound")}
          >
            <Text style={styles.textStyle}>CONVERT TO GBP</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.buttonStyle}
            onPress={() => this.convertCurrency("Dirham")}
          >
            <Text style={styles.textStyle}>CONVERT TO AED</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.buttonStyle}
            onPress={() => this.convertCurrency("Bitcoin")}
          >
            <Text style={styles.textStyle}>CONVERT TO BTC</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  viewStyle: {
    paddingTop: 50,
    flex: 1,
    alignItems: "center",
    justifyContent: "space-around",
    backgroundColor: "black",
  },
  textInput: {
    width: "80%",
    height: 50,
    borderColor: "white",
    borderWidth: 2,
    padding: 10,
    borderRadius: 10,
    paddingHorizontal: 20,
    color: "white",
  },
  resText: {
    color: "white",
    fontWeight: "bold",
    fontSize: 40,
  },
  viewStyleButton: {
    shadowColor: "green",
    shadowOffset: { width: 5, height: 5 },
    shadowRadius: 15,
    shadowOpacity: 1,
    fontFamily: "Menlo",
    margin: 20,
    flex: 0.3,
    flexDirection: "row",
    flexWrap: "wrap",
    alignItems: "center",
    justifyContent: "space-around",
  },
  buttonStyle: {
    width: 140,
    height: 40,
    padding: 5,
    borderRadius: 10,
    backgroundColor: "rgb(0,204,141)",
    fontSize: 10,
    alignItems: "center",
    justifyContent: "center",
    margin: 10,
  },
  textStyle: {
    fontWeight: "bold",
    color: "white",
    textTransform: "uppercase",
  },
});

export default App;
