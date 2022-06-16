import React, { Component } from 'react';
import { Image, StyleSheet, Text, View, Button } from 'react-native';
import logo from '../assets/logo.png';


class App extends Component{
  render(){
      
    return (
      
      <View style={styles.container}>
        <Text style={styles.header}>Welcome Lobby</Text>
        <Image source={logo} style={styles.logo} />

      </View>
    )
  }
}

const styles = StyleSheet.create({
  container:{
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  header: {
    textAlign: 'center',
    color: '#000',
    fontSize: 30,
  },
  logo: {
    width: 50,
    height: 50,
  }

});

export default App;
