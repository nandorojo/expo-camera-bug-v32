import React, { PureComponent } from 'react';
import { View, StyleSheet, Image, Text } from 'react-native';

export default class Preview extends PureComponent {
  render() {
    const { image } = this.props;
    if (!image || !image.uri) return null;
    const { height, width } = this.props;
    return (
      <View style={styles.container}>
        <Image 
          source={{ uri: image.uri }}
          style={[styles.image]}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    top: 0, 
    left: 0,
    width: '100%',
    height: '100%'
  },
  image: {
    flex: 1,
    transform: [{
      scaleX: -1
    }]
  }
})
