import { StyleSheet } from 'react-native';
import * as color from '../../utils/colors';
export default StyleSheet.create({
    mainContainer: {
        backgroundColor: 'white',
        flex: 1
    },
    header: {
        flexDirection: 'row',
        alignItems: 'center',
        padding: 10,
        marginTop: 15,
        marginBottom: 45,
    },
    textContainer: {
        flexDirection: 'column',
        justifyContent: 'space-between',
    },
    textHeader: {
        left: 25,
        fontSize: 26,
        color: color.input,
        marginBottom: '70%'
    },
    textPhone: {
        color: '#4D4B57',
        fontSize: 13,
        fontWeight: '400',
      },
      textContacts: {
        color: '#4D4B57',
        fontSize: 16,
        fontWeight: '700',
        marginBottom: 7,
      },
      allContacts: {
        flexDirection: 'row',
        marginHorizontal: 5,
        marginVertical: 5,
        backgroundColor: 'white',
        padding: 10,
        borderRadius: 20,
        borderColor: 'black',
        alignItems: 'center',
        elevation: 5
      },
})