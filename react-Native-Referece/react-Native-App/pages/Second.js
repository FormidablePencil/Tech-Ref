import React, { useState } from 'react';
import { View, Text, ScrollView, StyleSheet, FlatList, TouchableOpacity } from 'react-native';
// ~ React native doesn't scroll on it's own.
import stylez from '../sass/style.sass';


export default function Second() {
  const [people, setPeople] = useState([
    {name: 'Dennis', id: '1' },
    {name: 'Alex', id: '2' },
    {name: 'Fred', id: '3' },
    {name: 'Dennis', id: '4' },
    {name: 'Kayleb', id: '5' },
    {name: 'Simon', id: '6' },
    {name: 'Daniel', id: '7' },
  ]);
  //~ how would I add more to this statehook

  const pressHandler = (id) => {
    console.log(id);
    setPeople((PrevPeople) => { //~ deleting my the id
      return PrevPeople.filter(person => person.id != id); 
    })
  }
  
  return (
    <View style={stylez.success}>
      <Text style={stylez.whiteText}>First example:</Text>
      
     {/* {people.map((item) => {
       return (
          <View key={item.key}>
            <Text style={styles.item}>{item.name}</Text>
          </View>
       )
     })}  */}
     {/* //~same thing. */}
     {/* <Text style={stylez.whiteText}>First example:</Text> */}
     {/* {people.map(item => (
          <View key={item.key}>
            <Text style={styles.item}>{item.name}</Text>
          </View>
       ))}  */}
       {/* //~ event better because the ScrollView first has to load all the items whereas <FlatList> loads by chunks */}
         {/* //@ the 'keyExtractor' makes it so you could use id rather than key as an identifier. numColumns governs how many columns and data governs what data will be mapped out int the FlatList wrapper */}
       <FlatList numColumns={2} keyExtractor={(item) => item.id} data={people} renderItem={({ item }) => (
          <TouchableOpacity onPress={() => pressHandler(item.id)}>
            <Text style={styles.item}>{item.name}</Text>
          </TouchableOpacity>
        )} />
            <View style={stylez.flexExperimentation}>
              <Text>Experimenting with flexdirection</Text>
              <Text>Experimenting with flexdirection</Text>
            </View>
    </View>
  )
}

const styles = StyleSheet.create({
  item: {
    marginTop: 24,
    padding: 30,
    backgroundColor: 'gray',
    fontSize: 24,
    color: 'white',
    fontWeight: 'bold',
    marginHorizontal: 10,
    marginTop: 24
  }
})