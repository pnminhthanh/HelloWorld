import React from 'react';
import { FlatList, StyleSheet, View } from 'react-native';
import { ListItem, Screen, ListItemSeparator, ListItemDeleteAction } from '../components';

const initialMessages = [
    {
        id: 1,
        title: 'T1',
        description: 'D1',
        image: require('../assets/thanh.jpg')
    },
    {
        id: 2,
        title: 'T2',
        description: 'D2',
        image: require('../assets/thanh.jpg')
    },
]

function MessageScreen(props) {
    const [messages, setMessages] = React.useState(initialMessages);
    const [refreshing, setRefreshing] = React.useState(false);

    const handleDelete = (item) => {
        let newMessages = messages.filter(m => m.id != item.id)
        setMessages(newMessages)
    }

    return <Screen>
        <FlatList
            data={messages}
            keyExtractor={message => message.id.toString()}
            renderItem={({ item }) =>
                <ListItem
                    title={item.title}
                    subTitle={item.description}
                    image={item.image}
                    onPress={() => console.log('Message selected --> ', item)}
                    renderRightAction={() => <ListItemDeleteAction onPress={() => handleDelete(item)} />}
                />
            }
            ItemSeparatorComponent={() => <ListItemSeparator />}
            refreshing={refreshing}
            onRefresh={() => setMessages(initialMessages)}
        />
    </Screen>
}

const styles = StyleSheet.create({
    screen: {
    }
})

export default MessageScreen;   