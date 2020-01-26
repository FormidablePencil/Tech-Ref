import { createDrawerNavigator } from 'react-navigation-drawer';
import {createAppContainer } from 'react-navigation';

import AboutStack from './aboutStack'; //@ incompuses both of the stacks. The drawer will display both of these in it
import HomeStack from './homeStack';

const RootDrawerNavigator = createDrawerNavigator({ //@ whatever is within here will appear in the screen
  Home: {
    screen: HomeStack,
  },
  About: {
    screen: AboutStack,
  } 
});

export default createAppContainer(RootDrawerNavigator);
