import React, {useState} from 'react'
import { View, Text, TouchableOpacity, Image, StyleSheet, Switch } from 'react-native'
import { IconBack, IconNext, ImgProfile, Pencil } from '../../assets'

const Profile = () => {
    const [isEnabled, setIsEnabled] = useState(false);
    const toggleSwitch = () => setIsEnabled(previousState => !previousState);

    return (
        <View>
            <TouchableOpacity style={{width: 40, marginTop: 30, marginLeft: 20}}>
                <Image source={IconBack} />
            </TouchableOpacity>
            <View style={{alignSelf: 'center', marginTop: 15, justifyContent: 'center', alignItems: 'center'}}>
                <Image style={{height: 80, width: 80, borderRadius: 10}} source={ImgProfile} />
                <View style={{flexDirection: 'row', alignItems: 'center', marginTop: 10, height: 27, width: 49, justifyContent: 'space-between'}}>
                    <TouchableOpacity>
                        <Image source={Pencil} />
                    </TouchableOpacity>
                    <Text style={{fontSize: 16, color: '#7A7886'}}>Edit</Text>
                </View>
                <Text style={{fontSize: 24, color: '#4D4B57', marginTop: 16}}>Fachri Ghiffary</Text>
                <Text style={{fontSize: 16, color: '#4D4B57', marginTop: 10, marginBottom: 45}}>+62 813-9387-7946</Text>
            </View>

            {/* btn navigation */}
            <TouchableOpacity activeOpacity={0.5} style={styles.btn}>
                <Text style={styles.fontBtn}>Personal Information</Text>
                <Image source={IconNext}/>
            </TouchableOpacity>
            <TouchableOpacity activeOpacity={0.5} style={styles.btn}>
                <Text style={styles.fontBtn}>Change Password</Text>
                <Image source={IconNext}/>
            </TouchableOpacity>
            <TouchableOpacity activeOpacity={0.5} style={styles.btn}>
                <Text style={styles.fontBtn}>Change PIN</Text>
                <Image source={IconNext}/>
            </TouchableOpacity>
            <TouchableOpacity activeOpacity={0.5} style={styles.btn}>
                <Text style={styles.fontBtn}>Notification</Text>
                 <Switch
                    trackColor={{ false: "#grey", true: "#6379F4" }}
                    thumbColor={isEnabled ? "#white" : "white"}
                    ios_backgroundColor="#3e3e3e"
                    onValueChange={toggleSwitch}
                    value={isEnabled}
                />
            </TouchableOpacity>
            <TouchableOpacity activeOpacity={0.5} style={styles.btn}>
                <Text style={styles.fontBtn}>Logout</Text>
                <Image source={IconNext}/>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    btn : {
        width: 343,
        height: 58,
        borderRadius: 10,
        backgroundColor: '#E5E8ED',
        alignSelf: 'center',
        marginBottom: 25,
        flexDirection: 'row',
        paddingHorizontal: 20,
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    fontBtn: {
        fontSize: 16,
        fontWeight: 'bold', 
        color: '#4D4B57'
    },
})

export default Profile
