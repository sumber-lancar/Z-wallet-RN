import React from 'react'
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'

const Login = ({navigation}) => {


    return (
        <View>
            <Text>Ini adalah halaman Login</Text>

            <TouchableOpacity 
            style={styles.btn}
            onPress={() => {
                navigation.navigate('Home')
            }}
            >
                <Text style={{color: 'white'}}>Login</Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    btn: {
        height: 30, width: 100,
        backgroundColor: 'lightblue',
        borderRadius: 10,
        alignSelf: 'center',
        justifyContent: 'center',
        alignItems: 'center'
    }
})

export default Login
