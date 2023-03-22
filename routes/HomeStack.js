import Home from '../screens/Home';
import Profile from '../screens/Profile';
import Login from '../screens/Login';
import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';

const screens = {
    Login: {
        screen: Login
    },
    Profile: {
        screen: Profile
    },
    Home: {
        screen: Home
    }
    
}; 

const HomeStack = createStackNavigator(screens);

export default createAppContainer(HomeStack);