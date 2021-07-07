import React from 'react';
import {Text, View} from 'react-native';
import {styles} from '@components/Details/Details.style';
import FastImage from '@components/FastImage';

const Details = props => {
  const randomData = props.randomData;
  let URL = null;
  let rating = null;
  if (randomData && randomData.images && randomData.images.downsized_large) {
    URL = randomData.images.downsized_large.url;
  }
  if (randomData) {
    rating = randomData.rating;
  }
  return (
    <View style={styles.container}>
      <View style={styles.fastImage}>
        <FastImage uri={URL} />
      </View>
      <View>
        <Text style={styles.textContent}>
          {randomData ? randomData.title : ''}
        </Text>
        <Text style={styles.textContent}>{URL}</Text>
        {rating && (
          <View style={styles.rating}>
            <Text style={styles.ratingText}>{rating}</Text>
          </View>
        )}
      </View>
    </View>
  );
};

export default Details;
