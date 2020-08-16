import React from 'react';
import { View, Image, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  
  
  logo: {
    width: '100%',
    height: 565,
  },
});

const DisplayAnImage = () => {
  return (
    <View>
      
      <Image
        style={styles.logo}
        source={{
          uri:
            'https://clipartstation.com/wp-content/uploads/2017/11/indian-chariot-clipart-10-1.jpg',
        }}
      />
    </View>
  );
}

export default DisplayAnImage;
