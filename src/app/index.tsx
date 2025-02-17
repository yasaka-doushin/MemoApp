import { memo } from 'react'
import { View, Text, StyleSheet} from 'react-native'

const  Index = () : JSX.Element => {
    return (
        <View style={styles.container}>

            <View style={styles.header}>
                <View style={styles.headerInner}>
                    <Text style={styles.headerTitle}>Memo App</Text>
                    <Text style={styles.headerRight}>Log Out</Text>
                </View>
            </View>

            <View>

                <View style={styles.memoListItem}>
                    <View>
                        <Text style={styles.memoListItemTitle}>買い物リスト</Text>
                        <Text style={styles.memoListItemDate}>2025年2月17日 10:00</Text>
                    </View>
                    <View>
                        <Text>X</Text>
                    </View>
                </View>


                <View style={styles.memoListItem}>
                    <View>
                        <Text style={styles.memoListItemTitle}>買い物リスト</Text>
                        <Text style={styles.memoListItemDate}>2025年2月17日 10:00</Text>
                    </View>
                    <View>
                        <Text>X</Text>
                    </View>
                </View>


                <View style={styles.memoListItem}>
                    <View>
                        <Text style={styles.memoListItemTitle}>買い物リスト</Text>
                        <Text style={styles.memoListItemDate}>2025年2月17日 10:00</Text>
                    </View>
                    <View>
                        <Text>X</Text>
                    </View>
                </View>

            </View>

            <View style={styles.circleButton}>
                <Text style={styles.circleButtonLabel}>+</Text>
            </View>
        </View>
    )
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'ffffff'
    },
    header: {
        width: '100%',
        height: 104,
        backgroundColor: '#00536D',
        justifyContent: 'flex-end'
    },
    headerInner: {
        alignItems: 'center'
    },
    headerRight: {
        position: 'absolute',
        right: 16,
        bottom: 12,
        color: 'rgba(255, 255, 255, 0.7)'
    },
    headerTitle: {
        color: '#ffffff',
        fontSize: 24,
        marginBottom: 8,
        lineHeight: 32,
        fontWeight: 'bold'
    },
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
        fontSize: 20,
        lineHeight: 32
    },
    memoListItemDate: {
        fontSize: 12,
        lineHeight: 16,
        color: '#848484'
    },
    circleButton: {
        width: 64,
        height: 64,
        borderRadius: 32,
        backgroundColor: '#00536D',
        justifyContent: 'center',
        alignItems: 'center',
        position: 'absolute',
        right: 40,
        bottom: 40,
        shadowColor: '#000000',
        shadowOpacity: 0.25,
        shadowRadius: 8,
        shadowOffset: {width: 0, height: 8},
        elevation: 8
    },
    circleButtonLabel: {
        color: '#ffffff',
        fontSize: 40,
        lineHeight: 48
    }


})

export default Index
