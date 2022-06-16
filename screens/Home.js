import React, { Component } from 'react';
import { Image, StyleSheet, Text, View, Button } from 'react-native';
import logo from '../assets/logo.png';


class App extends Component{
  render(){
    const { navigation } = this.props;
    
    const pressHandler = () => {
      navigation.navigate('Lobby');
    }
    
    return (
      <View style={styles.container}>
        <Text style={styles.header}>Welcome Home</Text>
        <Image source={logo} style={styles.logo} />
        <Button title='Go to Lobby' onPress={pressHandler}/>
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
