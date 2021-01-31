import { Spinner } from 'native-base';
import React,{useEffect} from 'react'
import { View, Text, StyleSheet } from 'react-native'

const Splash = ({navigation}) => {
    useEffect(() => {
        setTimeout(() => {
            navigation.replace('Success')
        }, 3000);
    })
    return (
        <View style={styles.container}> 
            <Text style={styles.textSplash}>Z-Wallet</Text>
            <Spinner color="white" />
            <View style={styles.version}>
                <Text style={styles.textVersion}>V.0.1</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#6379F4'
    },
    textSplash : {
        fontSize: 32,
        color: 'white',
        marginTop: 150
    },
    version: {
        height: 250, 
        width: 50, 
        justifyContent: 'flex-end', 
        alignItems: 'center'
    },
    textVersion: {
        color:'white', 
        alignItems: 'flex-end', 
        justifyContent: 'flex-end'
    }
})

export default Splash
