import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import {styles} from '@components/Header/Header.style';

const Header = props => {
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={props.onPress}>
        <View style={styles.backView}>
          <Text style={styles.back}>{'< Back'}</Text>
        </View>
      </TouchableOpacity>
      <Text style={styles.title} numberOfLines={1}>
        {props.title}
      </Text>
    </View>
  );
};

export default Header;
