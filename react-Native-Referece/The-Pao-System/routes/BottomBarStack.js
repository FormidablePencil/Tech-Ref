import { createAppContainer } from 'react-navigation';
import { createBottomTabNavigator } from 'react-navigation-tabs'
import Paotable from '../screens/paotable'
import Flashcards from '../screens/Flashcards';
import Settings from '../screens/Settings';
import Animations from '../screens/Animations';

const AppNavigator = createBottomTabNavigator({
  Flashcards: {
    screen: Flashcards,
  },
  Account: {
    screen: Settings,
  },
  Pao: {
    screen: Paotable,
  }
});

export default createAppContainer(AppNavigator);