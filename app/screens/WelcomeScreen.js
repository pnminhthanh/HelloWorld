import React from 'react';
import { ImageBackground, StyleSheet, Button, View, Image, Text } from 'react-native';

function WelcomeScreen(props) {
    return (
        <ImageBackground
            style={styles.background}
            source={require("../assets/background.jpg")}>
            <View style={styles.logoContainer}>
                <Image style={styles.logo} source={require('../assets/logo.png')} />
                <Text>Give Love That You Will Need</Text>
            </View>
            <View style={styles.loginButton} ></View>
            <View style={styles.signupButton} ></View>
        </ImageBackground>
    );
}

const styles = StyleSheet.create({
    background: {
        flex: 1,
        justifyContent: 'flex-end',
        alignItems: 'center',
        sc
    },
    loginButton: {
        width: '100%',
        height: 70,
        backgroundColor: '#fc5c65',
    },
    signupButton: {
        width: '100%',
        height: 70,
        backgroundColor: '#4ecdc4',
    },
    logo: {
        width: 100,
        height: 100,
    },
    logoContainer: {
        position: "absolute",
        top: 70,
        alignItems: 'center'
    }
})
export default WelcomeScreen;