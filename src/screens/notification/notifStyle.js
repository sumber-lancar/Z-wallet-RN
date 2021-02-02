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
    },
    textPhone: {
        color: color.dark,
        fontSize: 20,
        fontWeight: '400',
      },
      textContacts: {
        color: color.disabled,
        fontSize: 15,
        fontWeight: '700',
        marginBottom: 7,
      },
      allContacts: {
        flexDirection: 'row',
        marginTop: 20,
        marginBottom: 10,
        marginHorizontal: 25,
        marginVertical: 5,
        backgroundColor: 'white',
        padding: 15,
        borderRadius: 20,
        borderColor: 'black',
        alignItems: 'center',
        elevation: 5
      },
      icon: {
        fontSize: 25,
        color: color.success,
      },
      icona: {
        fontSize: 25,
        color: 'red',
      }
})