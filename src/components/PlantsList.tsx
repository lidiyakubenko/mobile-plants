import React, {useState, useEffect} from 'react';
import {Button, Divider, Layout, Text, TopNavigation} from '@ui-kitten/components';
import {SafeAreaView, View} from 'react-native';

import storage, {initialPlants, STORAGE_KEYS} from '../../src/storage'
import {BottomNavigationTabs} from "./BottomNavigationTabs";

function PlantsList({ navigation }): JSX.Element {
    const [plants, setPlants] = useState<string[] | null>(null)

    useEffect(() => {
        (async () => {
            const data = await storage.getData(STORAGE_KEYS.plants)
            if (data === null) {
                await storage.storeData(STORAGE_KEYS.plants, initialPlants)
            }
            setPlants(data || initialPlants)
        })()
    })

    const navigateDetails = () => {
        navigation.navigate('PlantsSearch');
    };

    return (
        <SafeAreaView style={{ flex: 1 }}>
            <TopNavigation title='Мои растения' alignment='center'/>
            <Divider/>
            <Layout style={{ flex: 1, justifyContent: 'flex-start', alignItems: 'center' }}>
                <Button onPress={navigateDetails}>OPEN DETAILS</Button>
                <View>
                    {plants !== null ? plants.map(plant =>
                        <Text key={plant}>{plant}</Text>
                    ) : null}
                </View>
            </Layout>
            <BottomNavigationTabs/>
        </SafeAreaView>
    );
}

export default PlantsList
