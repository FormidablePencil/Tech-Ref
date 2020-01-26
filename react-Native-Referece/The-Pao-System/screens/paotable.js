import React, { useState } from 'react'
import { FlatList, Image, } from 'react-native'
import { View, Text } from 'react-native-tailwind'
import { LinearGradient } from 'expo-linear-gradient'
import { globalStyles } from '../styles/global'

export const paotable = () => {
  const [sets, setSets] = useState([
    {number: '00', person: 'James Bond', action: 'running', object: 'flamingos', key: '04'},
    {number: '01', person: 'Triplets', action: 'drinking', object: 'milk', key: '01'},
    {number: '02', person: 'Volk', action: 'howling', object: 'golden toilet paper', key: '23'},
    {number: '03', person: 'Simem', action: 'licking', object: 'popsicles', key: '00'},
    {number: '04', person: 'James Bond', action: 'running', object: 'flamingos', key: '13'},
    {number: '05', person: 'Triplets', action: 'drinking', object: 'milk', key: '98'},
    {number: '06', person: 'Volk', action: 'howling', object: 'golden toilet paper', key: '24'},
    {number: '07', person: 'Simem', action: 'licking', object: 'popsicles', key: '50'},
    {number: '08', person: 'James Bond', action: 'running', object: 'flamingos', key: '14'},
    {number: '09', person: 'Triplets', action: 'drinking', object: 'milk', key: '514'},
    {number: '10', person: 'Volk', action: 'howling', object: 'golden toilet paper', key: '25'},
    {number: '11', person: 'Simem', action: 'licking', object: 'popsicles', key: '52'},
    {number: '12', person: 'James Bond', action: 'running', object: 'flamingos', key: '15'},
    {number: '13', person: 'Triplets', action: 'drinking', object: 'milk', key: '53'},
    {number: '14', person: 'Volk', action: 'howling', object: 'golden toilet paper', key: '26'},
    {number: '15', person: 'Simem', action: 'licking', object: 'popsicles', key: '34'},
    {number: '16', person: 'James Bond', action: 'running', object: 'flamingos', key: '16'},
    {number: '17', person: 'Triplets', action: 'drinking', object: 'milk', key: '32'},
    {number: '18', person: 'Volk', action: 'howling', object: 'golden toilet paper', key: '27'},
    {number: '19', person: 'Simem', action: 'licking', object: 'popsicles', key: '232'},
  ]);
  
   function testing () {
    var aa = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l"],
    // variable for storing delete count
   dCount = 0,
   len = aa.length;
    // store array length
    for (var i = 0; i < len; i++) {
      // check index is odd
      if (i % 2 == 1) {
        // remove element based on actual array position 
        // with use of delete count
        aa.splice(i - dCount, 1);
        // increment delete count
        // you combine the 2 lines as `aa.splice(i - dCount++, 1);`
        dCount++;
        console.log(dCount);
      } else {
        console.log('we did it');
      }
    }
  }

  return (
    <View className="rounded h-full flex flex-col justify-start">
      <LinearGradient
          start={[.8, 0.8]}
          colors={['#2CC3DB', '#17739B']}
          style={{ borderRadius: 5, paddingTop: 30, paddingBottom: 5, position: 'relative' }}>
          <View className="absolute mx-2" style={{top: 40}}>
            <Image style={{width: 30, height: 30}} source={require('./../assets/playing-cards-png-11-original.png')} />
        </View>
        <View className="flex flex-row justify-around mx-2 self-center">
          <View className="w-5">
            <Text className="text-transparent">00</Text>
          </View>
          <View className="w-1/3">
            <Text className="text-center text-white text-xl py-3">P</Text>
          </View>
          <View className="w-1/3">
            <Text className="text-center text-white text-xl py-3">A</Text>
          </View>
          <View className="w-1/3">
            <Text className="text-center text-white text-xl py-3">O</Text>
          </View>
        </View>
      </LinearGradient>
      <View className="bg-white">

        <FlatList
          data={sets}
          renderItem={({ item }) => {
            let len = item.number;
            if (len % 2 == 1) {
              return (
                <View className="flex flex-row justify-around items px-4 bg-grey-lighter">
                  <View className="w-5 self-center">
                    <Text className="text-center mr-2">{item.number}</Text>
                  </View>
                  <View className="w-1/3 h-12 flex justify-center">
                    <Text className="text-center">{item.person}</Text>
                  </View>
                  <View className="w-1/3 h-12 flex justify-center">
                    <Text className="text-center">{item.action}</Text>
                  </View>
                  <View className="w-1/3 h-12 flex justify-center">
                    <Text className="text-center">{item.object}</Text>
                  </View>
                </View>
              )
            }else {
              return(
                <View className="flex flex-row justify-around items px-4">
                  <View className="w-5 h-12 flex justify-center">
                    <Text className="text-center mr-2">{item.number}</Text>
                  </View>
                  <View className="w-1/3 h-12 flex justify-center">
                    <Text className="text-center">{item.person}</Text>
                  </View>
                  <View className="w-1/3 h-12 flex justify-center" >
                    <Text className="text-center">{item.action}</Text>
                  </View>
                  <View className="w-1/3 h-12 flex justify-center">
                    <Text className="text-center">{item.object}</Text>
                  </View>
                </View>
              )
            }
          }

            }
        />

        </View>

    </View>
  )
}

export default paotable
