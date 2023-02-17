import React, {useState} from 'react';
import {Layout, Input, Button, TopNavigationAction, Icon, TopNavigation, Divider, Text} from '@ui-kitten/components';
import {SafeAreaView, StyleSheet} from "react-native";

const BackIcon = (props) => (
    <Icon {...props} name='arrow-back' />
);

function PlantsSearch({ navigation }): JSX.Element {
    const [search, setSearch] = useState<string>('')

    const findPlants = () => {
        console.log('поиск ...')
    }

    const navigateBack = () => {
        navigation.goBack();
    };

    const BackAction = () => (
        <TopNavigationAction icon={BackIcon} onPress={navigateBack}/>
    );
    return (
        <SafeAreaView style={styles.container}>
            <TopNavigation title='Поиск растений' alignment='center' accessoryLeft={BackAction}/>
            <Divider/>

            <Layout style={styles.form}>
                <Input
                    placeholder="Введите"
                    style={styles.searchInput}
                    value={search}
                    onChangeText={(nextValue) => setSearch(nextValue)}
                />
                <Button
                    style={styles.searchBtn}
                    onPress={findPlants}
                >
                    Найти
                </Button>
            </Layout>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    form: {
        flex: 1,
        flexDirection:"row",
        justifyContent: 'space-between',
        alignItems: 'flex-start',
        width: '100%',
        padding: 10
    },
    searchInput: {
        width:'72%'
    },
    searchBtn: {
        width:'25%'
    }
});

export default PlantsSearch
