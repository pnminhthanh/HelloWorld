import { StyleSheet } from 'react-native';
import colors from '../../config';

const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        padding: 15
    },
    image: {
        borderRadius: 35,
        width: 70,
        height: 70,
        marginRight: 10
    },
    title: {
        fontWeight: "500"
    },
    subTitle: {
        color: colors.medium
    }
})

export default styles;