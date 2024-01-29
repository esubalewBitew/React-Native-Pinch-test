import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { RouteProp } from '@react-navigation/native';

// Screens
import HomeScreen from '../../container/Main/Home';
import UsersScreen from '../../container/Main/users/UserListScreen';

type MainStackParamList = {
    HomeScreen: undefined;
    UserScreen: undefined;
};

const Stack = createNativeStackNavigator<MainStackParamList>();

function MainNavigation() {
    return (
        <Stack.Navigator initialRouteName="HomeScreen" screenOptions={{ headerShown: false }}>
            <Stack.Screen name='HomeScreen' component={HomeScreen} options={{ headerShown: false, animation: 'slide_from_right' }} />
            <Stack.Screen name='UserScreen' component={UsersScreen} options={{ headerShown: false, animation: 'slide_from_right' }} />
        </Stack.Navigator>
    );
}

export default MainNavigation;
