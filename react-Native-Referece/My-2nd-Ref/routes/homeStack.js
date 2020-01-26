import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation'; //~ i believe that the prop and method navigation is from here. I really want to get sass working. I can't go without it!
import Home from '../screens/home';
import ReviewDetails from '../screens/reviewDetails';
import Header from '../shared/header';
import React from 'react';

const screens = {
  Home: {
    screen: Home,
    navigationOptions: ({ navigation }) => {
      return{
        headerTitle: () => <Header navigation={navigation} title='gamezoneskiz' />,
      }
    }
  },
  ReviewDetails: {
    screen: ReviewDetails,
    navigationOptions: {
      title: 'Review Details',
      headerStyle: { backgroundColor: "green" }
    }
  },
};

// home stack navigator screens
const HomeStack = createStackNavigator(screens, {
  defaultNavigationOptions: {
    headerTintColor: 'white',
    headerStyle: { backgroundColor: 'blue', height: 150  }
  }
}); //~ setitng the defaults 

export default HomeStack;


