import React from 'react';
import { StyleSheet, View, FlatList } from 'react-native';

import { Icon, ListItem, ListItemSeparator, Screen } from '../components';
import colors from '../config';

const menuItems = [
    {
        title: 'My Listings',
        icon: {
            name: 'format-list-bulleted',
            backgroundColor: colors.primary
        }
    },
    {
        title: 'My Messages',
        icon: {
            name: 'email',
            backgroundColor: colors.secondary
        }
    },
]

function AccountScreen() {
    return (
        <Screen style={styles.abc}>
            <View style={styles.container}>
                <ListItem
                    title="Minh Thanh"
                    subTitle="minhthanh3497@gmail.com"
                    image={require('../assets/thanh.jpg')}
                />
            </View>
            <View style={styles.container}>
                <FlatList
                    data={menuItems}
                    keyExtractor={menuItem => menuItem.title}
                    ItemSeparatorComponent={ListItemSeparator}
                    renderItem={({ item }) =>
                        <ListItem
                            title={item.title}
                            IconComponent={<Icon name={item.icon.name} backgroundColor={item.icon.backgroundColor} />}
                        />}
                />
            </View>
            <ListItem
                title="Log Out"
                IconComponent={
                    <Icon name="logout" backgroundColor={colors.yellow} />
                } />
        </Screen>
    );
}

const styles = StyleSheet.create({
    abc: {
        backgroundColor: colors.light,
    },
    container: {
        marginVertical: 20,
    }
})

export default AccountScreen;