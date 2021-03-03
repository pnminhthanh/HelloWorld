import React from 'react';
import { FlatList, StyleSheet } from 'react-native';

import { Card, Screen } from '../components';
import colors from '../config';

const listings = [
    {
        id: 1,
        title: "Sour Candy",
        price: "$2",
        image: require('../assets/thumbnail.jpg')
    },
    {
        id: 2,
        title: "Glass full of Rose",
        price: "$100",
        image: require('../assets/glass.jpeg')
    }
];

function ListingsScreen() {
    return (
        <Screen style={styles.screen}>
            <FlatList
                data={listings}
                keyExtractor={listing => listing.id.toString()}
                renderItem={({ item }) =>
                    <Card
                        title={item.title}
                        price={item.price}
                        image={item.image}
                    />
                }
            />
        </Screen>
    );
}

const styles = StyleSheet.create({
    screen: {
        backgroundColor: colors.light,
        padding: 20
    }
})
export default ListingsScreen;