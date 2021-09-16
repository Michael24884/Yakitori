import React from "react"
import { Dimensions, StyleSheet, View } from "react-native";

const _Divider = () => {
    return <View style={styles.container} />
}

const styles = StyleSheet.create({
    container: {
        height: 1.2,
        alignSelf: 'center',
        backgroundColor: 'grey',
        opacity: 0.2,
        width: Dimensions.get('screen').width * 0.94,
        marginVertical: 10
    }
});

export const Divider = React.memo(_Divider);