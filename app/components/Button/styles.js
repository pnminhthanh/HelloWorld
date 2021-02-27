import { StyleSheet } from 'react-native';
import colors from '../../config';

const styles = StyleSheet.create({
    button: {
        backgroundColor: colors.primary,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 25,
        padding: 12,
        width: "100%",
        marginVertical: 5
    },
    text: {
        color: colors.white,
        fontSize: 18,
        textTransform: 'uppercase',
        fontWeight: 'bold'
    }
})

export default styles;