
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
import Pieces from '../Pieces';


export default class Board extends Component<{}> {
  constructor(props){
    super(props);
  }

  render(){
    return (
      <TouchableWithoutFeedback
        onPressOut={(e)=>{
          console.log('out',e.nativeEvent.locationX,e.nativeEvent.locationY);
        }}
        onPressIn={(e)=>{
          console.log('in',e.nativeEvent.locationX,e.nativeEvent.locationY);
        }}
      >
        <View style={mystyles.board}>
          <View style={mystyles.row}>
            <Pieces num={2}/>
            <Pieces num={2}/>
            <Pieces num={64}/>
            <Pieces num={8}/>
          </View>
          <View style={mystyles.row}>
            <Pieces num={32}/>
            <Pieces/>
            <Pieces num={128}/>
            <Pieces/>
          </View>
          <View style={mystyles.row}>
            <Pieces/>
            <Pieces/>
            <Pieces num={4}/>
            <Pieces num={4}/>
          </View>
          <View style={mystyles.row}>
            <Pieces num={2}/>
            <Pieces/>
            <Pieces num={256}/>
            <Pieces/>
          </View>
        </View>
      </TouchableWithoutFeedback>
    )
  }
}

const mystyles={
  board:{
    width:'90%',
    height:310,
    backgroundColor:'rgba(174,157,143,1)',
    paddingLeft:10,
    paddingTop:10
  },

  row:{
    height:75,
    display:'flex',
    flexDirection:'row'
  }
}
