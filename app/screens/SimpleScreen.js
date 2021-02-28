import React from 'react';
import { View, StyleSheet } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { AppText, AppButton, Card } from '../components';

function SimpleScreen(props) {
    return <View style={styles.container}>
        {/* <MaterialCommunityIcons name="heart" size={60} color="red" />
        <AppText>I love you!</AppText>
        <AppButton title={"Click me"} onPress={() => console.log('Tapped')} /> */}
        <Card
            title="A short title"
            subTitle="$100"
        />
    </View>
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        // justifyContent: 'center',
        // alignItems: 'center',
        backgroundColor: "#f8f4f4",
        padding: 20,
        paddingTop: 100
    }
})

export default SimpleScreen;