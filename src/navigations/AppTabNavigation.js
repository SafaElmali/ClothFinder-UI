import React from 'react';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import AppNavigation from "./AppNavigation.js";
import HistoryNavigation from "./HistoryNavigation.js";
import Ionicons from 'react-native-vector-icons/Ionicons';

const AppTabNavigation = createBottomTabNavigator(
    {
        Home: {
            screen: AppNavigation
        },
        History: {
            screen: HistoryNavigation
        }
    },
    {
        defaultNavigationOptions: ({navigation}) => ({
            tabBarIcon: ({focused, horizontal, tintColor}) => {
                const {routeName} = navigation.state;
                let IconComponent = Ionicons;
                let iconName;
                if (routeName === 'Home') {
                    iconName = focused
                        ? 'ios-information-circle'
                        : 'ios-information-circle-outline';
                // Sometimes we want to add badges to some icons.
                // You can check the implementation below.
                } else if (routeName === 'History') {
                    iconName = focused ? 'ios-list-box' : 'ios-list';
                }

                // You can return any component that you like here!
                return <IconComponent name={iconName} size={25} color={tintColor} />;
            },
        }),
        tabBarOptions: {
            activeTintColor: 'tomato',
            inactiveTintColor: 'gray',
        },
    },
    {
        initialRouteName: 'Home'
    }
);

export default AppTabNavigation;