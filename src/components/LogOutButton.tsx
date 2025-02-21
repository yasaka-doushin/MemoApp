import {
    TouchableOpacity, Text,
    Alert, StyleSheet
} from 'react-native'
import { signOut } from 'firebase/auth'
import { router } from 'expo-router'

import { auth } from '../config'

const handlePress = (): void => {
    signOut(auth)
     .then(() => {
        router.replace('/auth/log_in')
     })
     .catch(() => {
        console.log('Failed to log out')
        Alert.alert('Failed to log out.')
     })
}

const LogOutButton = (): JSX.Element => {
    return (
        <TouchableOpacity onPress={handlePress}>
            <Text style={styles.text}>Log Out</Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    text: {
        fontSize: 12,
        lineHeight: 24,
        color: 'rgba(255, 255, 255, 0.7)'
    }
})

export default LogOutButton
