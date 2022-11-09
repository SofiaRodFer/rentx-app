import React from 'react';

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import { StackAppRoutes } from './app.stack.routes';
import { Home } from '../screens/Home';
import { MyCars } from '../screens/MyCars';

const { Navigator, Screen } = createBottomTabNavigator()

export function AppTabRoutes() {
    return (
        <Navigator 
            screenOptions={{
                headerShown: false
            }}
        >
            <Screen
                name="Home"
                component={StackAppRoutes}
            />
            <Screen
                name="Profile"
                component={Home}
            />
            <Screen
                name="MyCars"
                component={MyCars}
            />
        </Navigator>
    )
}