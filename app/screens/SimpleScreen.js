import React from 'react';
import { View, StyleSheet } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { AppText, AppButton } from '../components';

function SimpleScreen(props) {
    return <View style={styles.container}>
        <MaterialCommunityIcons name="heart" size={60} color="red" />
        <AppText>I love you!</AppText>
        <AppButton title={"Click me"} onPress={() => console.log('Tapped')} />
    </View>
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    }
})

export default SimpleScreen;