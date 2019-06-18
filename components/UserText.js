import React from 'react';
import { StyleSheet, View, Text } from 'react-native';

const UserText = (props) => {
    return (
        <View style={styles.header}>
            <Text style={styles.title}>Üdv {props.displayedName}!</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    header: {
        alignItems: "center",
        justifyContent: "center"
    },
    title: {
        color: "#F3F3F3",
        fontSize: 32,
        fontWeight: '400',
    }
  });

export default UserText;