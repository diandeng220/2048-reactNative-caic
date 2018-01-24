
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

export default class Pieces extends Component{
  constructor(props){
    super(props);
  }

  render(){
    let styleProps = this.props.num?{...mystyles.pieces,...mystyles[this.props.num]}:mystyles.pieces;
    return (
      <View style={styleProps}>
        <Text style={mystyles.textStyle}>{this.props.num||''}</Text>
      </View>
    )
  }
}

const mystyles={
  pieces:{
    flex:1,
    marginRight:10,
    marginBottom:10,
    backgroundColor:'rgba(194,178,166,1)',
    justifyContent:'center',
    alignItems:'center',
    borderRadius:4,
  },
  textStyle:{
    color:'#FFFFFF',
    fontSize:35,
    fontWeight:'bold'
  },
  '2':{
    backgroundColor:'rgba(233,221,209,1)',
  },
  '4':{
    backgroundColor:'rgba(232,217,189,1)',
  },
  '8':{
    backgroundColor:'rgba(238,162,102,1)',
  },
  '16':{
    backgroundColor:'rgba(240,130,80,1)',
  },
  '32':{
    backgroundColor:'rgba(241,101,77,1)',
  },
  '64':{
    backgroundColor:'rgba(241,71,45,1)',
  },
  '128':{
    backgroundColor:'rgba(232,198,95,1)',
  },
  '256':{
    backgroundColor:'rgba(233,195,80,1)',
  },
  '512':{
    backgroundColor:'rgba(233,221,209,1)',
  },
  '1024':{
    backgroundColor:'rgba(233,221,209,1)',
  },
  '2048':{
    backgroundColor:'rgba(233,221,209,1)',
  },
  '5096':{
    backgroundColor:'rgba(233,221,209,1)',
  },
  '10192':{
    backgroundColor:'rgba(233,221,209,1)',
  },
  '20384':{
    backgroundColor:'rgba(233,221,209,1)',
  }
}
