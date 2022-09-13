import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput, Button, ScrollView } from 'react-native';
import React, { useState } from 'react';

export default function App() {
  const [allTasks, setAllTasks] = useState([])
  const [text, setText] = useState('');

  const handlers = () => {
    setAllTasks(currentTasks => [...allTasks, text])
    setText("")
  }

  const removePrimitiveFromArray = (task) => {
    setAllTasks(current =>
      current.filter(element => {
        return element !== task;
      }),
    );
  };

  // const editTask = (taskName) => {

  // }

  return (
    <View style={styles.container}>
      <View style={styles.inputHold}>
        <TextInput placeholder="Input task" style={styles.input} onChangeText={newText => setText(newText)} defaultValue={text} />
        <Button title='Submit' onPress={handlers} />
      </View>
      <ScrollView>
        <Text style={styles.textMessage}>Working on Todo App</Text>
        {allTasks.map((item, index) => {
          return (
            <View style={styles.textMessage} key={index}>
              <Text style={styles.textMessage2}>{item}</Text>
              <View style={styles.ButtonDelete}>
                <Button title='Delete' onPress={() => { removePrimitiveFromArray(item) }} />
                <Button title='Edit' onPress={() => { }} style={styles.fred} />
              </View>
            </View>
          )
        })}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 50,
    paddingRight: 20,
    paddingLeft: 20,
    paddingBottom: 20,
  },
  inputHold: {
    flexDirection: 'row',
    marginBottom: 20,
  },
  input: {
    width: '80%',
    borderWidth: 1,
    borderColor: 'gray',
    padding: 5,
  },
  textMessage: {
    backgroundColor: "blue",
    color: "white",
    padding: 10,
    borderRadius: 5,
    marginBottom: 20,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  ButtonDelete: {
    color: "white",
    flexDirection: "row",
  },
  textMessage2: {
    color: "white",
    fontSize: 18,
  },
  fred: {
    marginRight: 20,
  }
});
