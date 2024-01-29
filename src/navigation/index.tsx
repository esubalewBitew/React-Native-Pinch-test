import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import MainNavigation from './MainNavigation';

const RootNavigator: React.FC = () => {
    return (
        <NavigationContainer>
            <MainNavigation />
        </NavigationContainer>
    );
};

export default RootNavigator;
