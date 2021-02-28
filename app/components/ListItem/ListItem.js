import React from 'react';
import { Image, View } from 'react-native';
import { AppText } from '..'
import styles from './styles';

function ListItem({ title, subTitle, image }) {
    return <View style={styles.container}>
        <Image style={styles.image} source={image} />
        <View>
            <AppText style={styles.title}>{title}</AppText>
            <AppText style={styles.subTitle}>{subTitle}</AppText>
        </View>
    </View>
}

export default ListItem;