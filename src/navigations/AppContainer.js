import React from 'react';
import { createSwitchNavigator, createAppContainer } from 'react-navigation';
import AppTabNavigation from './AppTabNavigation';
import AuthNavigation from './AuthNavigation';

const SwitchContainer = createSwitchNavigator(
    {
        Auth: AuthNavigation,
        App: AppTabNavigation
    },
    {
        initialRouteName: 'Auth'
    }
)

const AppContainer = createAppContainer(SwitchContainer);

export default AppContainer;