import React from 'react'
import { View, Text, TouchableOpacity } from 'react-native'

const Login = ({navigation}) => {
    return (
        <View>
            <Text>Ini adalah halaman Login</Text>
            <TouchableOpacity style={{marginVertical: 10}} onPress={
                () => navigation.navigate('Search')
            }>
                <Text style={{color: '#6379F4'}}>Transfer</Text>
            </TouchableOpacity>
            <TouchableOpacity style={{marginVertical: 10}} onPress={
                () => navigation.navigate('Transaction History')
            }>
                <Text style={{color: '#6379F4'}}>See all</Text>
            </TouchableOpacity>
        </View>
    )
}

export default Login
