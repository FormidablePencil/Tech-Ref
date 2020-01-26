import React, { Component } from 'react';
import { StyleSheet } from 'react-native';
import { View, Text } from 'react-native-tailwind';
import * as Font from 'expo-font';
import styled from 'styled-components';
import ButtonBarStack from './routes/BottomBarStack'

const Test=styled.Text`
  background-color: green;
  color: blue;
`

//~ Create data list using useState react hooks. 

export default class App extends Component {
  
  componentDidMount(){
    Font.loadAsync({
      'rock-salt': require('./fonts/RockSalt-Regular.ttf'),
      });
    }

  render() {

    return( 
            

      <ButtonBarStack />
            
    )
  }
}



const styles = StyleSheet.create({
  container: {
    backgroundColor: 'orange',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  backgroundImage:{
    flex: 1,
    width: '100%',
    height: '100%',
    justifyContent: "center",
    alignItems: "center",
    // opacity: 0.7
  },
  callToActionBtn: {
    backgroundColor: "rgba(52, 95, 205, 0.56)",
    width: 200
  },
  card: {
    backgroundColor: 'white',
    width: 40,
    height: 60
  }
});

