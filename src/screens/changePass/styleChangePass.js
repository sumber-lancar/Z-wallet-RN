import { StyleSheet } from 'react-native';
import * as color from '../../utils/colors';

export default StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: color.backgroud,
        justifyContent: 'space-between',
    },
    header: {
        flexDirection: 'row',
        alignItems: 'center',
        padding: 10,
        marginTop: 15
    },
    subtitle: {
        color: color.subtitle,
        fontSize: 16,
        // marginVertical: '3%',
        marginTop: '3%',
        marginHorizontal: '4%',
        textAlign: 'left',
        lineHeight: 27,
        marginBottom: '10%',
    },
    input: {
        display: "flex",
        alignSelf: "center",
        width: 350,
        fontSize: 16,
        borderColor: color.input,
    },
    buttonSubmit: {
        display: "flex",
        alignSelf: "center",
        width: 350,
        backgroundColor: color.primary,
        marginHorizontal: '4%',
        marginVertical: '10%',
        borderRadius: 12,
        height: 57,
    },
    buttonSubmitText: {
        fontSize: 18,
        color: color.white,
        // fontWeight: '700',
    },
    textFormError: {
        color: color.error,
        fontSize: 12,
        marginLeft: '4%',
    },
    centeredView: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 22,
      },
      modalView: {
        height: 200,
        width: 300,
        margin: 20,
        backgroundColor: 'white',
        borderRadius: 20,
        padding: 35,
        alignItems: 'center',
        shadowColor: '#000',
        shadowOffset: {
          width: 0,
          height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
      },
      closeButton: {
        backgroundColor: '#6379F4',
        height: 40,
        width: 100,
        borderRadius: 20,
        padding: 10,
        elevation: 2,
        justifyContent: 'center',
        alignItems: 'center',
      },
      textStyle: {
        color: 'white',
        fontWeight: 'bold',
        textAlign: 'center',
      },
      modalText: {
        marginBottom: 15,
        textAlign: 'center',
        fontSize: 25,
      },
});