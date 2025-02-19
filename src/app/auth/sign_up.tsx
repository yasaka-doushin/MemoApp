import {
    View, Text, TextInput, TouchableOpacity, StyleSheet
 } from 'react-native'

import Header from '../../components/Header'
import Button from '../../components/Button'

const SignUp = (): JSX.Element => {
    return (
        <View style={styles.container}>
            <Header />
            <View style={styles.inner}>
                <Text style={styles.title}>Sign Up</Text>
                <TextInput style={styles.input} value='Email address'></TextInput>
                <TextInput style={styles.input} value='Password'></TextInput>
                <Button label='Submit' />
                <View style={styles.footer}>
                    <Text style={styles.footerText}>Already registered?</Text>
                    <TouchableOpacity>
                        <Text style={styles.footerLink}>Log In here!</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FFF3E3'
    },
    inner: {
        paddingVertical: 24,
        paddingHorizontal: 27
    },
    title: {
        color: '#592D13',
        fontSize: 24,
        lineHeight: 32,
        fontWeight: 'bold',
        marginBottom: 24
    },
    input: {
        borderWidth: 1,
        borderColor: '#DDDDDD',
        backgroundColor: '#ffffff',
        height: 48,
        padding: 8,
        fontSize: 16,
        marginBottom: 16
    },
    footer: {
        flexDirection: 'row'

    },
    footerText: {
        fontSize: 14,
        lineHeight: 24,
        marginRight: 8,
        color: '#592D13'
    },
    footerLink: {
        fontSize: 14,
        lineHeight: 24,
        color: '#00536D'
    }
})

export default SignUp
