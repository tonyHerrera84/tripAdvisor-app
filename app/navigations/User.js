import React from 'react';

import {
    createStackNavigator,
    createAppContainer,
    createBottomTabNavigator
} from 'react-navigation';

// screens
import HomeScreen from '../screens/Home';
import MyAccountScreen from '../screens/MyAccount';
import SearchScreen from '../screens/Search';
import TopFiveScreen from '../screens/TopFive';

const HomeScreenStack = createStackNavigator({
    Home: {
        screen: HomeScreen,
        navigationOptions: ({navigation}) => ({
            title: 'Home'
        })
    }
});

const MyAccountScreenStack = createStackNavigator({
    MyAccount: {
        screen: MyAccountScreen,
        navigationOptions: ({navigation}) => ({
            title: 'Mi cuenta'
        })
    }
})

const TopFiveScreenStack = createStackNavigator({
    TopFive: {
        screen: TopFiveScreen,
        navigationOptions: ({navigation}) => ({
            title: 'Top 5'
        })
    }
})


const SearchScreenStack = createStackNavigator({
    Search: {
        screen: SearchScreen,
        navigationOptions: ({navigation}) => ({
            title: 'Buscar'
        })
    }
})

const RootStack = createBottomTabNavigator(
    {
        Home: {
            screen: HomeScreenStack
        }
    }
)

export default createAppContainer(RootStack);