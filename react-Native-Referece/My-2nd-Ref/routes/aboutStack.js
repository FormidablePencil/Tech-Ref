import { createStackNavigator } from 'react-navigation-stack';
import About from '../screens/about';
import Header from '../shared/header';
import React from 'react';

const screens = {
  about: {
    screen: About,
    navigationOptions: ({ navigation }) => {
      return{
        headerTitle: () => <Header navigation={navigation} title='About page' />,
      }
    }
  }
};

//~ set the header's appearence
const AboutStack = createStackNavigator(screens, {
  defaultNavigationOptions: {
    headerTintColor: 'white',
    headerStyle: { backgroundColor: 'blue', height: 150  }
  }
}); //~ setitng the defaults 

export default AboutStack;

//! The only reason why we have another Stack is to add the same header as the rest of the pages governed by the homeStack.

