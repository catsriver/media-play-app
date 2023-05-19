import { StyleSheet, Text, View } from 'react-native'

const DownloadScreen = () => {
    return (
        <View style={styles.container}>
            <Text>Download Screen</Text>
        </View>
    )
}

export default DownloadScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
})
