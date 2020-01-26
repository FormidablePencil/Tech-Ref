import React, { useState } from 'react';
import First from './pages/First';
import { StyleSheet, Text, View, Button, TextInput, ScrollView } from 'react-native';
import Second from './pages/Second';
import * as Font from 'expo-font';
import { AppLoading } from 'expo'; //we have't yet installed anything into the project


const getFonts = () => Font.loadAsync({
  'nunito-regular': require('./assets/fonts/Nunito-Regular.ttf'),
  'nunito-bold': require('./assets/fonts/Nunito-Bold.ttf'),
});


export default function App() {
  const [fontsLoaded, setFontsLoaded] = useState(false);

  if (fontsLoaded) {
    return ( 
      <ScrollView>
        <First />
        <Second />
      </ScrollView>
    );
  } else {
    return (
      <AppLoading 
        startAsync={getFonts} 
        onFinish={() => setFontsLoaded(true)} 
      />
    )
  }
};

//~ These prebuilt components appear to be api components.