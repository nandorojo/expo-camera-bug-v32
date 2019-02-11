import React, { PureComponent } from 'react';
import { StyleSheet, View } from 'react-native';
import { Camera } from 'expo';

export default class Cam extends PureComponent {
  render() {
    const { handleCameraRef } = this.props;
    return (
      <Camera 
        style={styles.camera}
        type={Camera.Constants.Type.front}
        ref={handleCameraRef}
      />
    );
  }
}

const styles = StyleSheet.create({
  camera: {
    flex: 1
  }
});
