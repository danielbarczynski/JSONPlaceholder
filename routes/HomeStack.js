import Home from '../screens/Home';
import Profile from '../screens/Login';
import Login from '../screens/Login';
import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';

const screens = {
    Login: {
        screen: Login
    },
    Home: {
        screen: Home
    },
    Profile: {
        screen: Profile
    }
}; 

const HomeStack = createStackNavigator(screens);

export default createAppContainer(HomeStack);