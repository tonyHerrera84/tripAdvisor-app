import React from 'react';
import {Icon} from 'react-native-elements';

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
            screen: HomeScreenStack,
            navigationOptions: ({navigation}) => ({
                tabBarLabel: 'Inicio',
                tabBarIcon: ({tintColor}) => (
                    <Icon
                        name='compass-outline'
                        type='material-community'
                        size={22}
                        color={tintColor} />
                )
            })
        },
        TopFive: {
            screen: TopFiveScreenStack,
            navigationOptions: ({navigation}) => ({
                tabBarLabel: 'Top Five',
                tabBarIcon: ({tintColor}) => (
                    <Icon
                        name='magnify'
                        type='material-community'
                        size={22}
                        color={tintColor} />
                )
            })
        },
        MyAccount: {
            screen: MyAccountScreenStack,
            navigationOptions: ({navigation}) => ({
                tabBarLabel: 'My Account',
                tabBarIcon: ({tintColor}) => (
                    <Icon
                        name='compass-outline'
                        type='material-community'
                        size={22}
                        color={tintColor} />
                )
            })
        },
        Search: {
            screen: SearchScreenStack,
            navigationOptions: ({navigation}) => ({
                tabBarLabel: 'Search',
                tabBarIcon: ({tintColor}) => (
                    <Icon
                        name='compass-outline'
                        type='material-community'
                        size={22}
                        color={tintColor} />
                )
            })
        }
    }, {
        tabBarOptions: {
            inactiveTintColor: '#646464',
            activeTintColor: '#00a680',
            activeBackgroundColor: '#f6f6f6'
        }
    }
)

export default createAppContainer(RootStack);