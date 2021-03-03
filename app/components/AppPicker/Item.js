import React from 'react';
import { TouchableOpacity, View, StyleSheet } from 'react-native';
import { AppText } from '../index';
function Item({ name, onPress }) {
    return (
        <TouchableOpacity onPress={() => onPress(name)}>
            <AppText style={styles.container} >{name}</AppText>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    container: {
        padding: 20
    }
})

export default Item;