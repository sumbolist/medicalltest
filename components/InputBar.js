import React from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';

const InputBar = (props) => {
    return (
        <View style={styles.inputContainer}>
            <TextInput
             style={styles.input}
             onChangeText={(userName) => props.userNameChange(userName)}
             value={props.userName}
             placeholder="Név"
            />
            <TouchableOpacity
             onPress={props.setUserName}
             style={styles.setButton}
             >
                <Text style={styles.setButtonText}>
                    Küldés
                </Text>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    inputContainer: {
        height: 200,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: "center",
        shadowOffset: { width: 0, height: 3 },
        shadowColor: '#171717',
        shadowOpacity: .1
    },

    input: {
        backgroundColor: '#F3F3F3',
        flex: 1,
        paddingLeft: 10,
        fontSize: 18,
        height: 35,
        color: '#454545'
    },

    setButton: {
        width: 100,
        alignItems: "center"
    },

    setButtonText: {
        fontSize: 17,
        color: '#fff',
        fontWeight: '600'
    }
});

export default InputBar;