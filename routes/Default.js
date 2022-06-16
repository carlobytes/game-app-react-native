import { createStackNavigator } from "react-navigation-stack";
import { createAppContainer } from "react-navigation";
import HomePage from '../screens/Home';
import Lobby from '../screens/Lobby';

const screens = {
  HomePage: {
    screen: HomePage
  },
  Lobby: {
    screen: Lobby
  }
}

const HomeStack = createStackNavigator(screens);

export default createAppContainer(HomeStack);