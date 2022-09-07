import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { Button, StyleSheet, Text, TextInput, View } from 'react-native';

export default function App() {
  const[a,setA] = useState("");
  const[b,setB] = useState("");
  const[kq,setKq] = useState("");
  function myFunc(){
    var ketqua = Number.parseInt(a)+Number.parseInt(b);
    setKq(ketqua);
  }
  return (
    <View style={styles.container}>
      <View style={styles.view}>
        <Text>Nhập a:</Text>
        <TextInput style={styles.textinput} placeholder={"Nhập a"} onChangeText={setA}></TextInput>
      </View>
      <View style={styles.view}>
        <Text>Nhập b:</Text>
        <TextInput style={styles.textinput} placeholder={"Nhập b"} onChangeText={setB}></TextInput>
      </View>
      <View style={styles.view}>
        <Button title='Sum' color="#f194ff" onPress={myFunc}></Button>
      </View>
      <View style={styles.view}>
        <Text>Tổng:</Text>
        <TextInput style={styles.textinput}>{kq}</TextInput>
      </View>
      <StatusBar style='auto'></StatusBar>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
  },
  textinput:{
    borderWidth: 1,
    width: 100,
    padding:10,
  },
  view:{
    alignItems:"center",
    justifyContent:"center",
    flexDirection:"column",
    backgroundColor: '#fff',
    width: "100%",
    marginBottom: 10,
  }
});
