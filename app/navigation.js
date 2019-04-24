import React from 'react'
import { TabNavigator } from 'react-navigation'

import Home from '../screens/Home'

export const Tab = TabNavigator({

    Home: {
        screen: Home,
    }
}, {

    tabBarPosition: 'bottom',
    
})