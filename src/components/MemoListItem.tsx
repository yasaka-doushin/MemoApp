import { View, Text, TouchableOpacity, Alert, StyleSheet } from 'react-native'
import { Link } from 'expo-router'
import { deleteDoc, doc } from 'firebase/firestore'

import Icon from './Icon'
import { type Memo } from '../../types/memo'
import { auth, db } from '../config'

interface Props {
  memo: Memo
}


const handlePress = (id: string): void => {
  if (auth.currentUser === null) { return }
  const ref = doc(db, `users/${auth.currentUser.uid}/memos`, id)
  Alert.alert(
    'delete this memo',
    'Are you sure you want to delete this memo?',[
    {
      text: 'cancel'
    },
    {
      text: 'delete',
      onPress: () => {
        deleteDoc(ref)
          .catch(() => { Alert.alert('Failed to delete')})
      }

    }
  ])
}


const MemoListItem = (props: Props): JSX.Element | null => {
  const { memo } = props
  const { bodyText, updatedAt } = memo
  if (bodyText === null || updatedAt === null) { return null }
  const dateString = updatedAt.toDate().toLocaleString('ja-JP')
  return (
    <Link
      href={{pathname:'/memo/detail', params: {id: memo.id} }}
      asChild
      >
      <TouchableOpacity style={styles.memoListItem}>
        <View>
          <Text numberOfLines={1} style={styles.memoListItemTitle}>{bodyText}</Text>
          <Text style={styles.memoListItemDate}>{dateString}</Text>
        </View>
        <TouchableOpacity onPress={() => { handlePress(memo.id) }} >
          <Icon name='delete' size={32} color='#B0b0b0' />
        </TouchableOpacity>
      </TouchableOpacity>
    </Link>
  )
}

const styles = StyleSheet.create({
  memoListItem: {
    backgroundColor: '#fff3e3',
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 16,
    paddingHorizontal: 18,
    alignItems: 'center',
    borderBottomWidth: 1,
    borderBottomColor: 'rgba(0, 0, 0, 0.15)'
  },
  memoListItemTitle: {
    color: '#592d13',
    fontSize: 20,
    lineHeight: 32
  },
  memoListItemDate: {
    fontSize: 12,
    lineHeight: 16,
    color: '#848484'
  }
})

export default MemoListItem
