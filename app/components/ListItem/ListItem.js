import React from 'react';
import Swipeable from 'react-native-gesture-handler/Swipeable';
import { Image, TouchableHighlight, View } from 'react-native';
import { AppText } from '..'
import colors from '../../config';
import styles from './styles';

function ListItem({ title,
    subTitle,
    image,
    IconComponent,
    onPress,
    renderRightAction }) {
    return <Swipeable renderRightActions={renderRightAction}>
        <TouchableHighlight
            underlayColor={colors.light}
            onPress={onPress}>
            <View style={styles.container}>
                {IconComponent}
                {image && <Image style={styles.image} source={image} />}
                <View style={styles.detailContainer}>
                    <AppText style={styles.title}>{title}</AppText>
                    {subTitle && <AppText style={styles.subTitle}>{subTitle}</AppText>}
                </View>
            </View>
        </TouchableHighlight>

    </Swipeable>

}

export default ListItem;