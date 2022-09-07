import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { Alert, Button, StyleSheet, Text, TextInput, View } from 'react-native';

export default function App() {
  const [text,setText] = useState("");
  const [kq,setKq] = useState("");
  function myFunc(){
    setKq(text);
  }
  return (
    <View style={styles.container}>
      <TextInput style={styles.textinput} placeholder="Nhập vào!" onChangeText={(text) => setText(text)}></TextInput>
      <Button title='Click' onPress={myFunc}></Button>
      <TextInput style={styles.result}>{kq}</TextInput>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  textinput:{
    borderWidth:1,
    width:200,
    margin:10,
    padding:5
  },
  result:{
    borderWidth:1,
    width:100,
    margin:10,
    padding:5
  }
});
