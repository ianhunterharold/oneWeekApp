import React from 'react';
import {Text} from 'react-native';
import ProfilePage from '../components/profilePage';
import WeatherFeed from '../components/WeatherFeed';
import { createStackNavigator } from '@react-navigation/stack';
import LandingPage from '../components/LandingPage';

const Stack = createStackNavigator();

const RootStack = () => {
    return(
                <Stack.Navigator initialRouteName="Landing Page">
                    <Stack.Screen
                        name="Landing Page"
                        component={LandingPage}
                    />
                    <Stack.Screen
                        name="ProfilePage"
                        component={ProfilePage}
                    />
                    <Stack.Screen
                        name="WeatherFeed"
                        component={WeatherFeed}
                    />
                </Stack.Navigator>
            
    );
}

export default RootStack;
