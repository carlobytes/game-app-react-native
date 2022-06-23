import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';


class App extends Component{
  render(){
      
    return (
      
      <View style={styles.container}>
        <Text style={styles.header}>Hello!</Text>

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
