import { Text, StyleSheet, View, TouchableOpacity } from "react-native";
import React, { Component } from "react";

// var positions = new Array(9).fill(" ");

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isCross: false,
      playerTurn: "Tic Tac Toe",
      positions: new Array(9).fill(" "),
    };
  }

  fillCell = (loc) => {
    if (this.state.positions[loc] === " ") {
      let tmpArr = [];
      for (let i = 0; i < this.state.positions.length; i++) {
        tmpArr.push(this.state.positions[i]);
      }
      tmpArr[loc] = this.state.isCross;
      this.setState({ playerTurn: tmpArr });
      this.setState({ isCross: !this.state.isCross });
      this.state.isCross
        ? this.setState({ playerTurn: "X to Play" })
        : this.setState({ playerTurn: "O to Play" });
    }
    return String(this.state.positions[loc]);
  };

  drawCell = (loc) => {
    if (this.state.positions[loc] == " ") return " ";
    return this.state.positions[loc] ? "X" : "O";
  };

  render() {
    return (
      <View style={styles.viewStyle}>
        <View
          style={{
            flex: 0.2,
            alignItems: "center",
            justifyContent: "flex-start",
          }}
        >
          <Text style={styles.headingStyle}>{this.state.playerTurn}</Text>
        </View>
        <View style={styles.boxStyle}>
          <TouchableOpacity
            style={styles.innerBoxStyle}
            onPress={() => this.fillCell(0)}
          >
            <Text
              style={{ textAlign: "center", position: "relative", top: "35%" }}
            >
              {this.state.positions[0]}
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.innerBoxStyle}
            onPress={() => this.fillCell(1)}
          >
            <Text
              style={{ textAlign: "center", position: "relative", top: "35%" }}
            >
              {this.state.positions[1]}
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.innerBoxStyle}
            onPress={() => this.fillCell(2)}
          >
            <Text
              style={{ textAlign: "center", position: "relative", top: "35%" }}
            >
              {this.state.positions[2]}
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.innerBoxStyle}
            onPress={() => this.fillCell(3)}
          >
            <Text
              style={{ textAlign: "center", position: "relative", top: "35%" }}
            >
              {this.state.positions[3]}
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.innerBoxStyle}
            onPress={() => this.fillCell(4)}
          >
            <Text
              style={{ textAlign: "center", position: "relative", top: "35%" }}
            >
              {this.state.positions[4]}
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.innerBoxStyle}
            onPress={() => this.fillCell(5)}
          >
            <Text
              style={{ textAlign: "center", position: "relative", top: "35%" }}
            >
              {this.state.positions[5]}
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.innerBoxStyle}
            onPress={() => this.fillCell(6)}
          >
            <Text
              style={{ textAlign: "center", position: "relative", top: "35%" }}
            >
              {this.state.positions[6]}
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.innerBoxStyle}
            onPress={() => this.fillCell(7)}
          >
            <Text
              style={{ textAlign: "center", position: "relative", top: "35%" }}
            >
              {this.state.positions[7]}
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.innerBoxStyle}
            onPress={() => this.fillCell(8)}
          >
            <Text
              style={{ textAlign: "center", position: "relative", top: "35%" }}
            >
              {this.state.positions[8]}
            </Text>
          </TouchableOpacity>
        </View>
        <View>
          <TouchableOpacity style={styles.buttonStyle}>
            <Text style={{ color: "white", fontWeight: "bold", fontSize: 20 }}>
              Reset
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  viewStyle: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  boxStyle: {
    flex: 0.5,
    display: "flex",
    flexWrap: "wrap",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    width: "90%",
  },
  innerBoxStyle: { width: "33.333%", height: 105, borderWidth: 1 },
  headingStyle: {
    fontWeight: "bold",
    fontSize: 40,
  },
  buttonStyle: {
    width: 160,
    height: 40,
    backgroundColor: "black",
    color: "white",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 10,
  },
});
