import { Platform, StyleSheet } from 'react-native';
import colors from '../../config';

const styles = StyleSheet.create({
    container: {
        backgroundColor: colors.white,
        borderRadius: 25,
        flexDirection: "row",
        width: "100%",
        padding: 15,
        marginVertical: 10,
        alignItems: "center"
    },
    icon: {
        marginRight: 10
    },
    title: {
        flex: 1
    }
})

export default styles;