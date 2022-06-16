import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
//import logo from '../assets/lays.png';


class App extends Component{
  render(){
    return (
      <View style={styles.container}>
        <Text style={styles.header}>Welcome to my Application</Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container:{
    flex: 1,
    backgroundColor: '#bfe6ff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  header: {
    textAlign: 'center',
    color: '#000',
    fontSize: 30,
  },
  logo: {
    width: 250,
    height: 250,
  }

});

export default App;
