import React, { PureComponent } from 'react';
import { View, StyleSheet, TouchableOpacity, Text } from 'react-native';
import { ifIphoneX, getBottomSpace } from 'react-native-iphone-x-helper';
import { Ionicons } from '@expo/vector-icons';

export default class CameraOverlay extends PureComponent {
  render() {
    const { onPress, image } = this.props;
    const iconName = (image && image.uri) ? 'ios-close-circle-outline' : 'ios-radio-button-off';
    return (
      <View style={styles.container}>
        <View style={styles.buttons}>
          <TouchableOpacity 
            style={styles.button}
            onPress={onPress}
          >
            <Ionicons 
              name={iconName}
              size={100}
              color="white"
            />
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-end',
    ...StyleSheet.absoluteFill,
    zIndex: 2
  },
  buttons: {
    alignItems: 'center'
  },
  button: {
    padding: 15,
    paddingBottom: 10,
    ...ifIphoneX({
      marginBottom: getBottomSpace()
    }),
    shadowRadius: 10,
    shadowColor: "black",
    shadowOpacity: 0.8,
    elevation: 10
  },
  text: {
    fontSize: 50,
    fontWeight: 'bold',
    color: 'white'
  }
});
