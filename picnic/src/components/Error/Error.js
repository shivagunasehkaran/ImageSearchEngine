import React from 'react';
import {Text, View} from 'react-native';
import {styles} from './Error.style';

const Error = props => {
  return (
    <View style={styles.container}>
      <Text style={styles.errorText}>{'Something went wrong!'}</Text>
    </View>
  );
};

export default Error;
