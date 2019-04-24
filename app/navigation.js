import React from 'react'
import { TabNavigator } from 'react-navigation';

import Home from '../screens/Home'

export const Tabs = TabNavigator({
    Home: {
      screen: Home,
    },
});

