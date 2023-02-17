import React from 'react';
import { StyleSheet } from 'react-native';
import { BottomNavigation, BottomNavigationTab, Icon } from '@ui-kitten/components';

const PersonIcon = (props) => (
    <Icon {...props} name='person-outline'/>
);

const SearchIcon = (props) => (
    <Icon {...props} name='search-outline'/>
);

const useBottomNavigationState = (initialState = 0) => {
    const [selectedIndex, setSelectedIndex] = React.useState(initialState);
    return { selectedIndex, onSelect: setSelectedIndex };
};

export const BottomNavigationTabs = () => {
    const bottomState = useBottomNavigationState();

    return (
        <BottomNavigation style={styles.bottomNavigation} {...bottomState}>
            <BottomNavigationTab icon={PersonIcon} title="Мои растения"/>
            <BottomNavigationTab icon={SearchIcon} title="Поиск"/>
        </BottomNavigation>
    );
};

const styles = StyleSheet.create({
    bottomNavigation: {
        marginVertical: 8,
    },
});
