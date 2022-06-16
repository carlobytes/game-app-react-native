import React, { Component } from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';
import logo from './assets/lays.png';


class App extends Component{
  render(){
    console.log('Hi');
    return (
      <View style={styles.container}>
        <Text style={styles.header}>Welcome to my Applications</Text>
        <Image source={logo} style={styles.logo} />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container:{
    flex: 1,
    backgroundColor: '#fffc00',
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
