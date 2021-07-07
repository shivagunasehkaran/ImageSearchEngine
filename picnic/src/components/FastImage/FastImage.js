import React, {useState} from 'react';
import {ActivityIndicator} from 'react-native';
import Image from 'react-native-fast-image';

const FastImage = props => {
  const [loading, setLoading] = useState(false);
  return (
    <Image
      style={{width: '100%', height: '100%'}}
      source={{
        uri: props.uri,
        priority: Image.priority.normal,
      }}
      onLoadStart={() => {
        setLoading(true);
      }}
      onLoadEnd={() => {
        setLoading(false);
      }}
      resizeMode={Image.resizeMode.stretch}>
      <ActivityIndicator animating={loading} />
    </Image>
  );
};

export default FastImage;
