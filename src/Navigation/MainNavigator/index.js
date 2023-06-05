import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import BottomNavigator from '../BottomNavigator';
import HomeScreen from '../../Screens/HomeScreen';
import Profile from '../../Screens/Profile';
import BottomTabBar from '../BottomNavigator';


const Stack = createNativeStackNavigator();

const MainNavigator = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator
                screenOptions=
                {{ headerShown: false }}
            >
                <Stack.Screen
                    name="BottomTab"
                    component={BottomTabBar}
                />
                <Stack.Screen
                    options={{
                       animation:'slide_from_bottom'
                    }}
                    name="Profile"
                    component={Profile}
                />
            </Stack.Navigator>
        </NavigationContainer>
    );
}

export default MainNavigator;