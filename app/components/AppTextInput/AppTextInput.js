import React from 'react';
import { View, TextInput } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons'

import { defaultStyles } from '../../config';
import styles from './styles';

function AppTextInput({ icon, size = 20, color = defaultStyles.colors.medium, ...otherProps }) {
    return (
        <View style={styles.container}>
            {icon && <MaterialCommunityIcons
                name={icon}
                size={size}
                color={color}
                style={styles.icon} />}
            <TextInput style={defaultStyles.text} {...otherProps} />
        </View>
    );
}

export default AppTextInput;