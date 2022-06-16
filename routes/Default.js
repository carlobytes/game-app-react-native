import { createStackNavigator } from "react-navigation-stack";
import { createAppContainer } from "react-navigation";
import HomePage from '../screens/Home';
import Lobby from '../screens/Lobby';

const screens = {
  HomePage: {
    screen: HomePage,
    navigationOptions: {
      title: 'Home',
    }
  },
  Lobby: {
    screen: Lobby,
    navigationOptions: {
      title: 'Lobby Poe '
    }
  }
}

const HomeStack = createStackNavigator(screens, 
  {defaultNavigationOptions:{
    headerStyle: { backgroundColor: '#eee' }
  }}
);

export default createAppContainer(HomeStack);