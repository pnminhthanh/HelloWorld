import React from 'react';
import { Image, StyleSheet, View } from 'react-native';
import colors from '../config';

function ViewImageScreen(props) {
    return <View style={styles.container}>
        <View style={styles.closeIcon} />
        <View style={styles.deleteIcon} />
        <Image
            resizeMode="contain"
            style={styles.image}
            source={require('../assets/glass.jpeg')}></Image>
    </View>
}

const styles = StyleSheet.create({
    closeIcon: {
        width: 50,
        height: 50,
        backgroundColor: colors.primary,
        position: 'absolute',
        top: 50,
        left: 40
    },
    deleteIcon: {
        width: 50,
        height: 50,
        backgroundColor: colors.secondary,
        position: 'absolute',
        top: 50,
        right: 40
    },
    image: {
        width: '100%',
        height: '100%'
    },
    container: {
        backgroundColor: colors.black,
        flex: 1
    }
})

export default ViewImageScreen;