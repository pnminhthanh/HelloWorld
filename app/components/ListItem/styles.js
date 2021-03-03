import { StyleSheet } from 'react-native';
import colors from '../../config';

const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        padding: 15,
        backgroundColor: colors.white
    },
    image: {
        borderRadius: 35,
        width: 70,
        height: 70,
    },
    detailContainer: {
        marginLeft: 10,
        justifyContent: 'center'
    },
    title: {
        fontWeight: "500"
    },
    subTitle: {
        color: colors.medium
    }
})

export default styles;