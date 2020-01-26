import React, { useState } from 'react';
import { StyleSheet, View, Text, Button, FlatList, TouchableOpacity } from 'react-native';
import Card from '../shared/card';

export default function Home({ navigation }) {
  const [reviews, setReviews] = useState([
    { title: 'Dennis the menis', rate: '2.2', body: 'lorem', id: '0' },
    { title: 'FairyTail', rate: '1', body: 'lorem ip', id: '1' },
    { title: 'Jumanji', rate: '5', body: 'lorem ipsum', id: '2' },
  ]);

  const pressHandler = () => {
    navigation.navigate('ReviewDetails')
    // navigation.push('ReviewDetails'); //~ more explicate methods. This is manually approach. 
  }
  
  return (
    <View>
      <Text>Items</Text>
      <Button title='go to reivews page' onPress={pressHandler} />
      
      <View style={{backgroundColor: "orange"}}>
        <FlatList data={reviews} renderItem={({ item }) => (
          <TouchableOpacity onPress={() => navigation.navigate('ReviewDetails', item)}>
            <Card>
              <Text>{ item.title }</Text>
            </Card>
          </TouchableOpacity>
        )}
      />
      </View>
      
    </View>
  );
}
