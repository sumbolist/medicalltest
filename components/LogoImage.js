import React from 'react';
import { StyleSheet, View, Image } from 'react-native';

const LogoImage = () => {
    return (
        <View style={styles.imageContainer}>
            <Image source={require('../assets/logo-white.png')} />
        </View>
    );
}

const styles = StyleSheet.create({
    imageContainer: {
      flexDirection: 'row',
      alignItems: "center",
      justifyContent: 'center',
      height: 250
    }
  });

export default LogoImage;