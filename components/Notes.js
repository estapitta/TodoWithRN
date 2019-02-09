import React, { Component } from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
export default class Notes extends Component {
  render() {
    return (
      <View key={this.props.keyval} style={styles.oneNote}>
        <Text style={styles.noteText}>{this.props.keyval.date}</Text>
        <Text style={styles.noteText}>{this.props.keyval.note}</Text>
        <TouchableOpacity
          onPress={() => this.props.onDelete(this.props.keyval)}
          style={styles.delete}
        >
          <Text style={styles.deleteText}>Delete</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  oneNote: {
    padding: 20,
    paddingRight: 100,
    borderBottomWidth: 2,
    borderLeftColor: "#edededed"
  },
  noteText: {
    paddingLeft: 20,
    borderLeftWidth: 10,
    borderLeftColor: "#E91E63"
  },
  delete: {
    position: "absolute",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#298",
    padding: 10,
    top: 10,
    bottom: 10,
    right: 10
  },
  deleteText: {
    color: "white"
  }
});
