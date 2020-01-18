import { createStackNavigator } from 'react-navigation-stack';
import History from "../screens/History/index";

const HistoryNavigation = createStackNavigator(
    {
        History: {
            screen: History
        }
    },
    {
        initialRouteName: 'History',
    }
);

export default HistoryNavigation;