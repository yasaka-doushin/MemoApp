import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet
} from "react-native"
import { useState } from 'react'

import { Link, router } from "expo-router"
import Button from "../../components/Button"

const handlePress = (): void => {
  //sign up
  router.push("/memo/list")
}

const SignUp = (): JSX.Element => {
  const [ email, setEmail ] = useState('')
  const [ password, setPassword] = useState('')
  return (
    <View style={styles.container}>
      <View style={styles.inner}>
        <Text style={styles.title}>Sign Up</Text>
        <TextInput
          style={styles.input}
          value={email}
          onChangeText={(text) => { setEmail(text) }}
          autoCapitalize='none'
          keyboardType='email-address'
          placeholder="Email Adress"
          textContentType='emailAddress'
        />
        <TextInput
          style={styles.input}
          value={password}
          onChangeText={(text) => { setPassword(text) }}
          autoCapitalize='none'
          secureTextEntry
          placeholder="Password"
          textContentType='password'
        />
        <Button label="Submit" onPress={handlePress} />
        <View style={styles.footer}>
          <Text style={styles.footerText}>Already registered?</Text>
          <Link href="/auth/log_in" asChild>
            <TouchableOpacity>
              <Text style={styles.footerLink}>Log In here!</Text>
            </TouchableOpacity>
          </Link>
        </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFF3E3"
  },
  inner: {
    paddingVertical: 24,
    paddingHorizontal: 27
  },
  title: {
    color: "#592D13",
    fontSize: 24,
    lineHeight: 32,
    fontWeight: "bold",
    marginBottom: 24
  },
  input: {
    borderWidth: 1,
    borderColor: "#DDDDDD",
    backgroundColor: "#ffffff",
    height: 48,
    padding: 8,
    fontSize: 16,
    marginBottom: 16
  },
  footer: {
    flexDirection: "row"
  },
  footerText: {
    fontSize: 14,
    lineHeight: 24,
    marginRight: 8,
    color: "#592D13"
  },
  footerLink: {
    fontSize: 14,
    lineHeight: 24,
    color: "#00536D"
  }
})

export default SignUp
