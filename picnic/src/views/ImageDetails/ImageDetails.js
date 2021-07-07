import Header from '@components/Header';
import React from 'react';
import {SafeAreaView, View} from 'react-native';
import {styles} from './Image.style';
import Details from '@components/Details';

const ImageDetails = props => {
  const randomData = props.route.params.item;
  return (
    <View style={styles.container}>
      <SafeAreaView>
        <Header
          title={randomData.title}
          onPress={() => props.navigation.goBack()}
        />
        <Details randomData={randomData} />
      </SafeAreaView>
    </View>
  );
};

export default ImageDetails;
