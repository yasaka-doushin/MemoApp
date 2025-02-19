import {
  View,
  TextInput,
  StyleSheet
  //KeyboardAvoidingView
} from "react-native"
import { router } from 'expo-router'

import CircleButton from "../../components/CircleButton"
import Icon from "../../components/Icon"

const handlePress = (): void => {
  router.back()
}

const Create = (): JSX.Element => {
  return (
    <View style={styles.container}>
      <View style={styles.inputContainer}>
        <TextInput style={styles.input} value="" />
      </View>
      <CircleButton onPress={handlePress} >
        <Icon name="check" size={40} color="#ffffff" />
      </CircleButton>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  inputContainer: {
    paddingHorizontal: 27,
    paddingVertical: 32,
    flex: 1
  },
  input: {
    fontSize: 16,
    lineHeight: 24,
    flex: 1,
    textAlignVertical: "top"
  }
})

export default Create
