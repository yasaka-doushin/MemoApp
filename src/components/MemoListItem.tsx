import { View, Text, TouchableOpacity, StyleSheet} from 'react-native'

import Icon from './Icon'

const MemoListItem = (): JSX.Element => {
    return (
        <View style={styles.memoListItem}>
            <View>
                <Text style={styles.memoListItemTitle}>買い物リスト</Text>
                <Text style={styles.memoListItemDate}>2025年2月17日 10:00</Text>
            </View>
            <TouchableOpacity>
                <Icon name='delete' size={32} color='#B0b0b0' />
            </TouchableOpacity>
        </View>
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
