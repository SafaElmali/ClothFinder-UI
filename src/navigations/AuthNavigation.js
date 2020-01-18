import { createStackNavigator } from 'react-navigation-stack';
import Login from '../screens/Login/index';
import Signup from '../screens/Signup/index';

const AuthNavigation = createStackNavigator(
    {
        Login: {
            screen: Login
        },
        Signup: {
            screen: Signup
        }
    },
    {
        initialRouteName: 'Login',
    }
);

export default AuthNavigation;