import { StyleSheet } from 'react-native';
import colors from '../../config';

const styles = StyleSheet.create({
    card: {
        borderRadius: 14,
        backgroundColor: colors.white,
        marginBottom: 20,
        overflow: 'hidden'
    },
    image: {
        width: "100%",
        height: 200,
    },
    detailsContainer: {
        padding: 20
    },
    title: {
        marginBottom: 6,
        color: colors.black
    },
    subTitle: {
        color: colors.secondary,
        fontWeight: "bold"
    }
})

export default styles;