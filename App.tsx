import React, {useState, useEffect} from 'react';
import type {PropsWithChildren} from 'react';
import {
    SafeAreaView,
    ScrollView,
    StatusBar,
    StyleSheet,
    Text,
    useColorScheme,
    View
} from 'react-native';

import {Colors, Header} from 'react-native/Libraries/NewAppScreen';
import storage, {initialPlants, STORAGE_KEYS} from './storage'

type SectionProps = PropsWithChildren<{
    title: string;
}>;

function Section({children, title}: SectionProps): JSX.Element {
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
    return (
        <View
            style={styles.plantsList}>
            {plants !== null ? plants.map(plant =>
                <Text key={plant}>{plant}</Text>
            ) : null}
        </View>
    );
}

function App(): JSX.Element {
    const isDarkMode = useColorScheme() === 'dark';

    const backgroundStyle = {
        backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
    };

    return (
        <SafeAreaView style={backgroundStyle}>
            <StatusBar
                barStyle={isDarkMode ? 'light-content' : 'dark-content'}
                backgroundColor={backgroundStyle.backgroundColor}
            />
            <ScrollView
                contentInsetAdjustmentBehavior="automatic"
                style={backgroundStyle}>
                <Header/>
                <View
                    style={{
                        backgroundColor: isDarkMode ? Colors.black : Colors.white,
                    }}>
                    <Section title="Step One test">
                        Edit <Text style={styles.highlight}>App.tsx</Text> to change this
                        screen and then come back to see your edits.
                    </Section>
                </View>
            </ScrollView>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    sectionContainer: {
        marginTop: 32,
        paddingHorizontal: 24,
    },
    sectionTitle: {
        fontSize: 24,
        fontWeight: '600',
        color: Colors.black
    },
    sectionDescription: {
        marginTop: 8,
        fontSize: 18,
        fontWeight: '400',
    },
    highlight: {
        fontWeight: '700',
    },
    plantsList: {
        display: "flex",
        flexDirection: 'column'
    }
});

export default App;
