import React from 'react';
import { View, Modal, TouchableWithoutFeedback, Button, FlatList } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons'

import { AppText, Screen } from '../index';
import { defaultStyles } from '../../config';
import Item from './Item';
import styles from './styles';

function AppPicker({ icon, title, items }) {
    const [visible, setVisible] = React.useState(false);
    const [selectedItem, setSelectedItem] = React.useState('');

    const onPressItem = (value) => {
        setSelectedItem(value);
        setVisible(false);
    }

    return (
        <>
            <TouchableWithoutFeedback onPress={() => setVisible(true)}>
                <View style={styles.container}>
                    {icon && <MaterialCommunityIcons
                        name={icon}
                        size={20}
                        color={defaultStyles.colors.medium}
                        style={styles.icon} />}
                    <AppText style={styles.title}>
                        {selectedItem ? selectedItem : title}
                    </AppText>
                    <MaterialCommunityIcons
                        name="chevron-down"
                        size={20}
                        color={defaultStyles.colors.medium}
                        style={styles.icon} />
                </View>

            </TouchableWithoutFeedback>
            <Modal visible={visible} animationType="slide">
                <Screen>
                    <Button title="Close" onPress={() => setVisible(false)} />
                    <FlatList
                        data={items}
                        keyExtractor={item => item.value.toString()}
                        renderItem={({ item }) => <Item name={item.label} onPress={value => onPressItem(value)} />} />
                </Screen>
            </Modal>
        </>
    );
}

export default AppPicker;