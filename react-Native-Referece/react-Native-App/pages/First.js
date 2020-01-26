import React, { useState } from 'react'; //~ useState allows you to use state in a functional component
import { StyleSheet, Text, View, Button, TextInput } from 'react-native';
import stylez from '../sass/style.sass';
import { vw, vh, vmin, vmax } from 'react-native-expo-viewport-units';


export default function First({ navigation }) {
  const [name, setTheName] = useState('Dennis'); 
  const [person, setPerson] = useState({ name: 'Mario', age: 40 });

  const clickHandler = () => {
    setTheName('Daniel'); //@ this updates what's within the useState(); 
  }

  const pressHandler = () => {
    navigation.navigate('')
  }
  
  return (
    <View>
      <View style={stylez.container}>
        <Text style={styles.styleText2}>{name}</Text>
        <Text style={styles.styleText2}>{person.name}'s age is {person.age}</Text>
        <View style={styles.buttonContainer}>
          <Button title='update state' onPress={clickHandler} />
      </View>
        <TextInput style={styles.input} placeholder='Type here' onChangeText={(val) => setTheName(val)} />
        <TextInput multiline style={styles.input} placeholder='numeric keyboard' onChangeText={(val) => setTheName(val)} />
        <TextInput keyboardType='numeric' style={styles.input} placeholder='numeric keyboard' onChangeText={(val) => setTheName(val)} />
      <Text style={styles.styleText}><Text>App</Text> created by Dennis Aleksandrov</Text>
      </View>
    </View>
  );
}

//~ buttons are self closing components and we pass in props to it. You also can't add stlyes to Button components so you'll have wrap it up in a View and style that.
//~ element won't inharite any styles from it's parent. You have to style elements directly. The exception is with a text inside of text wrapper
//~ everything is centered to the middle 
//~ view is a div 
//~test must be rendered in <Text>
//~ style={} is for stylinf


const styles = StyleSheet.create({
  styleText: {
    fontWeight: 'bold',
    color: 'white',
    fontSize: 20
  },
  styleText2: {
    textAlign: 'center',
    fontSize: 40,
    color: 'white'
  },
  buttonContainer: {
    margin: 20,
    padding: 3,
    backgroundColor: 'black',
    borderRadius: 3
  },
  input: {
    backgroundColor: 'black',
    borderWidth: 1,
    padding: 8,
    margin: 10,
    color: 'white'
  }
});

