import React from 'react';
import { Image, View } from 'react-native';
import { AppText } from '..';
import style from './styles';

function Card({ title, subTitle, image }) {
    return <View style={style.card}>
        <Image style={style.image} source={image} />
        <View style={style.detailsContainer}>
            <AppText style={style.title}>{title}</AppText>
            <AppText style={style.subTitle}>{subTitle}</AppText>
        </View>
    </View>
}

export default Card;