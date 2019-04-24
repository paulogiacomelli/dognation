import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';
import Home from './screens/Home'
import { createBottomTabNavigator, createAppContainer } from 'react-navigation';

class App extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Home />
      </View>
      
    );
  }
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    marginTop: 50,
  },


});

const TabNavigator = createBottomTabNavigator({
  HomeScreen: { screen: Home },
});

export default createAppContainer(TabNavigator);
