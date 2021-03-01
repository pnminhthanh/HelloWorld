import React from 'react';
import { FlatList, StyleSheet, View } from 'react-native';
import colors from '../../config';

function ListItemSeparator() {
    return <View style={styles.separator} />
}

const styles = StyleSheet.create({
    separator: {
        width: '95%',
        height: 1,
        backgroundColor: colors.light,
        alignSelf: 'center'
    }
})

export default ListItemSeparator;