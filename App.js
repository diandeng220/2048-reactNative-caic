/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  TextInput,
  Image,
  ScrollView,
  TouchableWithoutFeedback
} from 'react-native';
import Board from './src/component/Board';
import Swiper from './src/component/Swiper';

export default class App extends Component<{}> {
  constructor(props){
    super(props);
    this.state={
      name:'caic'
    }
  }
  render() {
    return (
      <View style={styles.container}>
        <Board/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
});
