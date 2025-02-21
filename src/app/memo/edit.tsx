import {
  View,
  TextInput,
  Alert,
  StyleSheet
  //KeyboardAvoidingView
} from 'react-native'
import { router, useLocalSearchParams } from 'expo-router'
import { useState, useEffect} from 'react'
import { doc, getDoc, setDoc, Timestamp } from 'firebase/firestore'

import CircleButton from '../../components/CircleButton'
import Icon from '../../components/Icon'
import { auth, db } from '../../config'

const handlePress = (id: string, bodyText: string): void => {
  if (auth.currentUser === null) { return }
  const ref = doc(db, `users/${auth.currentUser.uid}/memos`, id)
  setDoc(ref, {
    bodyText,
    updatedAt: Timestamp.fromDate(new Date())
  })
    .then(() => {
      router.back()
    })
    .catch((error) => {
      console.log(error)
      Alert.alert('Failed to update')
    })
}


const Edit = (): JSX.Element => {
  const id = String(useLocalSearchParams().id)
  const [bodyText, setBodyText] = useState('')
  useEffect(() => {
    if (auth.currentUser === null) { return }
    const ref = doc(db, `users/${auth.currentUser.uid}/memos`, id)
    getDoc(ref)
      .then((docRef) => {
        const RemoteBodyText = docRef?.data()?.bodyText
        setBodyText(RemoteBodyText)
      })
      .catch((error) => {
        console.log(error)
      })
  }, [])
  return (
    <View style={styles.container}>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          value={bodyText}
          multiline
          autoFocus
          onChangeText={(text) => { setBodyText(text)}}
        />
      </View>
      <CircleButton onPress={() => {handlePress(id, bodyText)}} >
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
    backgroundColor: '#fff3e3',
    paddingHorizontal: 27,
    paddingVertical: 32,
    flex: 1
  },
  input: {
    fontSize: 16,
    lineHeight: 24,
    flex: 1,
    textAlignVertical: 'top',
    color: '#592d13'
  }
})

export default Edit
