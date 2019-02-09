import React, { Component } from "react";
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  ScrollView,
  TouchableOpacity,
  TextInput
} from "react-native";

import Notes from "./Notes";

export default class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      arrOfNotes: [],
      notes: ""
    };
  }
  render() {
    let notes = this.state.arrOfNotes.map((val, key) => {
      return <Notes key={key} keyval={val} onDelete={this.deleteNote} />;
    });
    return (
      <SafeAreaView style={styles.container}>
        <View style={styles.header}>
          <Text style={styles.text}>Noter</Text>
        </View>
        <ScrollView style={styles.scrollContainer}>{notes}</ScrollView>
        <View style={styles.footer}>
          <TextInput
            style={styles.textInput}
            placeholder=">note"
            placeholderTextColor="white"
            onChangeText={notes => {
              this.setState({
                notes
              });
            }}
            value={this.state.notes}
          />
        </View>
        <TouchableOpacity
          style={styles.addButton}
          onPress={this.addNote.bind(this)}
        >
          <Text style={styles.addButtonText}>Add</Text>
        </TouchableOpacity>
      </SafeAreaView>
    );
  }
  addNote() {
    if (this.state.notes) {
      let d = new Date();
      let noteArray = this.state.arrOfNotes;
      noteArray.push({
        date: d.getFullYear() + "/" + (d.getMonth() + 1) + "/" + d.getDate(),
        note: this.state.notes
      });
      this.setState({
        arrOfNotes: noteArray,
        notes: ""
      });
    }
  }
  deleteNote = deletedNote => {
    let updatedArray = this.state.arrOfNotes.filter(note => {
      return deletedNote.note !== note.note;
    });
    this.setState({
      arrOfNotes: updatedArray
    });
  };
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white"
  },
  header: {
    backgroundColor: "#E91E63",
    alignItems: "center",
    justifyContent: "center",
    borderBottomWidth: 10,
    borderBottomColor: "#add"
  },
  text: {
    color: "white",
    fontSize: 18,
    padding: 26
  },
  scrollContainer: {
    flex: 1,
    marginBottom: 100
  },
  footer: {
    // position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    zIndex: 10
  },
  textInput: {
    alignSelf: "stretch",
    color: "#fff",
    padding: 20,
    backgroundColor: "#252525",
    borderTopWidth: 2,
    borderTopColor: "#ededed"
  },
  addButton: {
    position: "absolute",
    zIndex: 11,
    right: 20,
    bottom: 100,
    backgroundColor: "#E19E63",
    width: 90,
    height: 90,
    borderRadius: 50,
    alignItems: "center",
    justifyContent: "center",
    elevation: 8
  },
  addButtonText: {
    color: "#fff",
    fontSize: 24
  }
});
