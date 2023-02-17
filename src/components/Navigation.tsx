import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import PlantsList  from './PlantsList';
import PlantsSearch  from './PlantsSearch';
import {HomeScreen} from './Home'
import {DetailsScreen} from './Details'

const { Navigator, Screen } = createStackNavigator();

const HomeNavigator = () => (
    <Navigator screenOptions={{headerShown: false}}>
        {/*<Screen name='Мои растения' component={PlantsList}/>*/}
        {/*<Screen name='Поиск' component={PlantsSearch}/>*/}
        <Screen name='Home' component={PlantsList}/>
        <Screen name='PlantsSearch' component={PlantsSearch}/>
    </Navigator>
);

export const AppNavigator = () => (
    <NavigationContainer>
        <HomeNavigator/>
    </NavigationContainer>
);
