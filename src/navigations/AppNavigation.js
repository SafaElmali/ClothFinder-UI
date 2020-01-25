import { createStackNavigator } from 'react-navigation-stack';
import Home from "../screens/Home/index";
import Profile from '../screens/Profile/index';

const AppNavigation = createStackNavigator(
    {
        Home: { screen: Home },
        Profile: { screen: Profile }
    },
    {
        initialRouteName: 'Home',
    }
);

export default AppNavigation;