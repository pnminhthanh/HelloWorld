import React from 'react';
import { View, StyleSheet, Switch } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';

import { AppText, AppButton, AppPicker, AppTextInput, Card, Screen } from '../components';
import colors from '../config';

const categories = [
    { label: "Furniture", value: 1 },
    { label: "Clothings", value: 2 },
    { label: "Camera", value: 3 }
]
function SimpleScreen(props) {
    const [isNew, setIsNew] = React.useState(false);

    return <Screen style={styles.container}>
        {/* <MaterialCommunityIcons name="heart" size={60} color="red" />
        <AppText>I love you!</AppText>
        <AppButton title={"Click me"} onPress={() => console.log('Tapped')} /> */}
        {/* <Card
            title="A short title"
            subTitle="$100"
        /> */}
        <AppPicker title="Category" icon="apps" items={categories} />
        <AppTextInput placeholder="Email..." icon="email" size="20" color={colors.medium} />
    </Screen>
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