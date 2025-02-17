import {View, Text, StyleSheet} from 'react-native'

const Header = (): JSX.Element => {
    return (
        <View style={styles.header}>
            <View style={styles.headerInner}>
                <Text style={styles.headerTitle}>Memo App</Text>
                <Text style={styles.headerRight}>Log Out</Text>
            </View>
        </View>
    )
}
const styles = StyleSheet.create({
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
    }
})

export default Header
