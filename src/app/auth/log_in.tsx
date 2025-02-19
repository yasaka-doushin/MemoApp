import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet
} from "react-native"

import { Link, router } from "expo-router"

import Button from "../../components/Button"

const handlePress = (): void => {
  //log in
  router.replace('/memo/list')
}

const LogIn = (): JSX.Element => {
  return (
    <View style={styles.container}>
      <View style={styles.inner}>
        <Text style={styles.title}>Log In</Text>
        <TextInput style={styles.input} value="Email address"></TextInput>
        <TextInput style={styles.input} value="Password"></TextInput>
        <Button label="Submit" onPress={handlePress} />
        <View style={styles.footer}>
          <Text style={styles.footerText}>Not registered?</Text>
          <Link href="/auth/sign_up" asChild>
            <TouchableOpacity>
              <Text style={styles.footerLink}>Sign up here!</Text>
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

export default LogIn
