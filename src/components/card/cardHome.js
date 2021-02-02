import React,{useEffect, useState} from 'react'
import { View, Text, Image, StyleSheet } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'
import {useSelector} from 'react-redux'

const CardHome = (props) => {
    const name = useSelector((state) => state.auth.name_user)
    let txtcolor = props.type
    let txtSymbol
    let recvr 
    let stts

    if(props.receiver === name){
        recvr = props.sender
    }else{
        recvr = props.receiver
    }

    if(txtcolor === 'in'){
       txtcolor = 'green'
       txtSymbol = '+'
       stts = 'Income'
    }else{
        txtcolor = 'red'
        txtSymbol = '-'
        stts = 'Expense'
    }

    const [color, setColor] = useState(txtcolor)
    const [symbol, setSymbol] = useState(txtSymbol)
    const [penerima, setPenerima] = useState(recvr)
    const [status, setStatus] = useState(stts)
   
    
    return (
        <TouchableOpacity style={styles.container} onPress={() => {
            props.navigation.navigate("Success")
        }}>
            <View style={{flexDirection: 'row'}}>
                <View style={styles.containerImage}>
                    <Image style={styles.img}  source={props.photo}/>
                </View>
                <View style={styles.txtContainer}>
                    <Text style={styles.txtName}>{penerima}</Text>
                    <Text style={styles.status}>{status}</Text>
                </View>
            </View>
            <View>
                <Text style={{...styles.price, color}}>{symbol}{props.amount}</Text>
            </View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    container: {
        height: 96,
        width: '100%', 
        paddingHorizontal: 16, 
        paddingVertical: 20,
        marginBottom: 20, 
        backgroundColor: 'white', 
        flexDirection: 'row', 
        justifyContent: 'space-between', 
        alignItems: 'center'
    },
    containerImage :{
        height: 56, 
        width: 56, 
        backgroundColor : '#EBEEF2', 
        borderRadius: 10, 
        justifyContent: 'center', 
        alignItems: 'center'
    },
    img: {
        maxHeight: 56, 
        maxWidth: 56, 
        borderRadius: 10
    },
    txtContainer: {
        marginLeft: 15, 
        height: 50, 
        justifyContent: 'space-between'
    },
    txtName: {
        fontSize: 16, 
        fontWeight: 'bold'
    },
    status: {
        color: '#7A7886'
    },
    price: { 
        fontSize: 18, 
        fontWeight: 'bold'
    }
})

export default CardHome
