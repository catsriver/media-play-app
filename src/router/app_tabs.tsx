import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { Feather } from '@expo/vector-icons'

import { HomeScreen, MovieScreen, DownloadScreen, UserScreen } from '../screens'

const Tab = createBottomTabNavigator()

const AppTabs = () => {
    return (
        <Tab.Navigator screenOptions={{ tabBarShowLabel: false }}>
            <Tab.Screen
                name='Home'
                component={HomeScreen}
                options={{
                    tabBarIcon: ({ color, size }) => (
                        <Feather name='home' size={size} color={color} />
                    )
                }}
            />
            <Tab.Screen
                name='Movie'
                component={MovieScreen}
                options={{
                    tabBarIcon: ({ color, size }) => (
                        <Feather name='airplay' size={size} color={color} />
                    )
                }}
            />
            <Tab.Screen
                name='Download'
                component={DownloadScreen}
                options={{
                    tabBarIcon: ({ color, size }) => (
                        <Feather name='download' size={size} color={color} />
                    )
                }}
            />
            <Tab.Screen
                name='user'
                component={UserScreen}
                options={{
                    tabBarIcon: ({ color, size }) => (
                        <Feather name='user' size={size} color={color} />
                    )
                }}
            />
        </Tab.Navigator>
    )
}

export default AppTabs
