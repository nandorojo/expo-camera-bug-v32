import React from 'react';
import { View, StyleSheet } from 'react-native';

//  my components
import Cam from './Cam';
import CameraOverlay from './Overlay';
import Preview from './Preview';

export default class Record extends React.Component {
  constructor() {
    super();

    this.state = {
      image: null
    };
    this.onTakePicture = this.onTakePicture.bind(this);
    this.handleCameraRef = this.handleCameraRef.bind(this);
    this.onPress = this.onPress.bind(this);
  }
  onPress() {
    // toggle between showing image and showing camera
    const { image } = this.state;
    if (image && image.uri) {
      this.setState({ image: null });
    } else {
      this.onTakePicture();
    }
  }
  async onTakePicture() {
    //  take the picture
    if (this.camera) {

      // TAKE PICTURE
      const before = Date.now();

      alert('Should take picture...');
      const image = await this.camera.takePictureAsync({ skipProcessing: true });

      const after = Date.now();
      const secondsItTook = (after - before) / 1000;
      alert(`Success. Picture took ${secondsItTook} seconds to complete`);

      // BUG: sometimes it gives an image with 0 height and 0 width, so...
      if (image.height && image.width) {
        this.setState({ image });
      }
    }
  }
  handleCameraRef(ref) {
    this.camera = ref;
  }
  render() {
    const { image } = this.state;
    return (
      <View style={styles.container}>
        <Cam 
          handleCameraRef={this.handleCameraRef} 
        />
        <CameraOverlay
          onPress={this.onPress}
          image={image}
        />
        <Preview 
          image={image}
        />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    position: 'relative'
  }
})