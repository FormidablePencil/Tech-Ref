import React from 'react';
import { StyleSheet, View, Text, Button, Image } from 'react-native';
import Card from '../shared/card';


export default function ReviewDetails({ navigation }) {

  const pressHandler = () => {
    navigation.goBack();
  }
  
  return (
    <View>
      <Card>
        <Text>{ navigation.getParam('title') }</Text>
        <Text>{ navigation.getParam('body') }</Text>
        <Text>{ navigation.getParam('rate') }</Text>
        <View style={style.rating}>
          <Text>GameZone rating:</Text>
          <Image source={require('../assets/ace-of-spades.png')} />
        </View>
        <Button title='go to home screen' onPress={pressHandler} />
      </Card>
    </View>
  );
}

const style = StyleSheet.create({
  rating:{
    
  }
})
