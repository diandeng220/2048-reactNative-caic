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

export default class Swiper extends Component<{}> {
  constructor(props){
    super(props);
    this.state={
      defaultConfig:{
        isEqual:true,		//所有滚动的元素长宽是否相等,true,false
    		loop: 0,			//循环滚动次数，0时无限
    		direction: "left",	//滚动方向，"left","right","up","down"
      }
    }
  }

  render(){
    return (
      <View
        style={mystyles.container}
      >
        {this.props.children&&this.props.children.length&&this.props.children.map((children,index)=>{
          return (
            <View key={index} style={mystyles.slider}>
              {children}
            </View>
          )
        })}
      </View>
    )
  }
}

const mystyles={
  container:{
    display:'flex',
    flexDirection:'row'
  },
  slider:{
    // flexDirection:'row'
  }
}
