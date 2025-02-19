import { View, Text, ScrollView, StyleSheet} from 'react-native'
import Icon from '../../components/Icon'

import Header from '../../components/Header'
import CircleButton from '../../components/CircleButton'

const Detail = (): JSX.Element => {
    return (
        <View style={styles.container}>
            <Header />
            <View style={styles.memoHeader}>
                <Text style={styles.memoTitle}>買い物リスト</Text>
                <Text style={styles.memoDate}>2月17日 10:00</Text>
            </View>
            <ScrollView style={styles.memoBody}>
                <Text style={styles.memoBodyText}>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta,
                    laboriosam odit ab, ratione sed blanditiis recusandae doloremque
                     iusto non perferendis saepe eveniet libero commodi corporis
                     doloribus molestiae omnis incidunt dolores!
                </Text>
            </ScrollView>
            <CircleButton style={{ top: 160, bottom: 'auto' }}>
                <Icon name='pencil' size={40} color='#ffffff' />
            </CircleButton>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#ffffff'
    },
    memoHeader: {
        backgroundColor: '#00536D',
        height:96,
        justifyContent: 'center',
        paddingVertical: 24,
        paddingHorizontal: 18
    },
    memoTitle: {
        color: '#ffffff',
        fontSize: 20,
        lineHeight: 32,
        fontWeight: 'bold'
    },
    memoDate: {
        color: 'rgba(255, 255, 255, 0.7)',
        fontSize: 12,
        lineHeight: 16
    },
    memoBody: {
        backgroundColor: '#fff3e3',
        paddingHorizontal: 27,
        paddingVertical: 32,
    },
    memoBodyText: {
        fontSize: 16,
        lineHeight: 24,
        color: '#592d13'
    }
})


export default Detail
