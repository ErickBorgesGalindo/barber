import { StyleSheet, Pressable, Text } from 'react-native';
import React from 'react';

const Button = ({onPress}) => {
    return (
        <Pressable style={styles.WhiteButton} onPress={onPress}>
          <Text style={styles.DarkTextButton}>Log in</Text>
        </Pressable>
    );
};

export default Button;

const styles = StyleSheet.create({
    WhiteButton: {
        backgroundColor: '#FEFFFA',
        width: '60%',
        height: '23%',
        borderRadius: 30,
        justifyContent: 'center',
        alignItems: 'center',
        shadowColor:'#1C1C1E',
        shadowOpacity: 0.4,
        shadowOffset: {width: 5, height: 5},
    },

    DarkTextButton: {
        color: '#1C1C1E',
        fontFamily: 'Light',
        fontSize: 18
    }
});