import React from 'react';
import { Text, StyleSheet, ImageBackground } from 'react-native';

const Tab = () => {
  return (
    <ImageBackground 
      source={require('@/assets/images/cerro-siete-colores.jpg')}
      style={styles.container}
      resizeMode="cover"
    >
      <Text style={styles.text}>Nuevo tab!</Text>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 38,
    fontWeight: 'bold',
    color: '#11111',
  },
});

export default Tab;