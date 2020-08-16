import React from 'react';
import { View, Image, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  
  
  logo: {
    width: 500,
    height: 530,
  },
});

const DisplayAnImage = () => {
  return (
    <View>
      
      <Image
        style={styles.logo}
        source={{
          uri:
            'https://4.bp.blogspot.com/-OI7dglpIMrs/U_Dp-IBNmhI/AAAAAAAACLs/OTduVaPuqhw/s1600/1.jpg',
        }}
      />
    </View>
  );
}

export default DisplayAnImage;
