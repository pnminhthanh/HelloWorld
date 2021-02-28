import React from 'react';
import { View, StyleSheet, Image } from 'react-native';
import { AppText, ListItem } from '../components';
import colors from '../config';

function ListingDetailScreen(props) {
    return <View >
        <Image style={styles.image} source={require("../assets/thumbnail.jpg")} />
        <View style={styles.detailsContainer}>
            <AppText style={styles.title}>Love candy for sale</AppText>
            <AppText style={styles.subTitle}>$5</AppText>
        </View>
        <View style={styles.userContainer}>
            <ListItem
                image={require('../assets/thanh.jpg')}
                title="Minh Thanh"
                subTitle="5 Listings"
            />
        </View>
    </View>
}

const styles = StyleSheet.create({
    image: {
        width: "100%",
        height: 300
    },
    detailsContainer: {
        padding: 20
    },
    title: {
        fontSize: 24,
        fontWeight: "500"
    },
    subTitle: {
        color: colors.secondary,
        fontWeight: "bold",
        fontSize: 20,
        marginVertical: 10
    },
    userContainer: {
        marginVertical: 40
    }
})

export default ListingDetailScreen; 