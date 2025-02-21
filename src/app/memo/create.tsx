import {
  View,
  TextInput,
  StyleSheet
  //KeyboardAvoidingView
} from 'react-native'
import { router } from 'expo-router'
import { collection, addDoc, Timestamp} from 'firebase/firestore'
import { useState } from 'react'

import CircleButton from '../../components/CircleButton'
import Icon from '../../components/Icon'
import { db, auth } from '../../config'

const handlePress = (bodyText: string): void => {
  if (auth.currentUser === null) { return }
  const ref = collection(db, `users/${auth.currentUser.uid}/memos`)
  addDoc(ref, {
    bodyText,
    updatedAt: Timestamp.fromDate(new Date())
  })
    .then((docRef) => {
      console.log('success', docRef.id)
      router.back()
    })
    .catch((error) => {
      console.log(error)
    })

}

const Create = (): JSX.Element => {
  const [bodyText, setBodyText] = useState('')
  return (
    <View style={styles.container}>
      <View style={styles.inputContainer}>
        <TextInput
          multiline
          style={styles.input}
          value={bodyText}
          onChangeText={(text) => { setBodyText(text) }}
          autoFocus
        />
      </View>
      <CircleButton onPress={() => {handlePress(bodyText)}} >
        <Icon name='check' size={40} color='#ffffff' />
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
    flex: 1,
    backgroundColor: '#fff3e3'
  },
  input: {
    fontSize: 16,
    lineHeight: 24,
    flex: 1,
    textAlignVertical: 'top',
    color: '#592d13'
  }
})

export default Create
