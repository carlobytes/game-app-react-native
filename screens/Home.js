import React, { Component } from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';
import Pressable from 'react-native/Libraries/Components/Pressable/Pressable';
import logo from '../assets/logo.png';


class App extends Component{
  render(){
    const { navigation } = this.props;
    
    const pressHandler = () => {
      navigation.navigate('Lobby');
    }
    
    return (
      <View style={styles.container}>
        <Text style={styles.header}>Welcome!</Text>
        <Image source={logo} style={styles.logo} />
        <Pressable style={styles.button} onPress={pressHandler}>
          <Text style={styles.text}>Enter Lobby</Text>
        </Pressable>
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
  button: {
    marginTop: 30,
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 4,
    elevation: 3,
    backgroundColor: 'black',
  },
  text: {
    fontSize: 16,
    lineHeight: 21,
    fontWeight: 'bold',
    letterSpacing: 0.25,
    color: 'white',
  },
  logo: {
    width: 250,
    height: 220,
  }

});

export default App;
