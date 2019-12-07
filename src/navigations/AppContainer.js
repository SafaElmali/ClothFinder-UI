import { createSwitchNavigator, createAppContainer } from 'react-navigation';
import AppNavigation from './AppNavigation';
import AuthNavigation from './AuthNavigation';

const SwitchContainer = createSwitchNavigator(
    {
        Auth: AuthNavigation,
        App: AppNavigation
    },
    {
        initialRouteName: 'Auth'
    }
)

const AppContainer = createAppContainer(SwitchContainer);

export default AppContainer;