import React from 'react';
import {Text, View} from 'react-native';
import {styles} from '@components/Details/Details.style';
import FastImage from '@components/FastImage';

const Details = props => {
  let randomData = null;
  let url = null;
  let rating = null;

  if (props) {
    randomData = props.randomData;
  }
  if (randomData && randomData.images && randomData.images.downsized_large) {
    url = randomData.images.downsized_large.url;
  }
  if (randomData) {
    rating = randomData.rating;
  }
  return (
    <View style={styles.container}>
      <View style={styles.fastImage}>
        <FastImage uri={url} />
      </View>
      <View>
        <Text style={styles.textContent}>
          {randomData ? randomData.title : ''}
        </Text>
        <Text style={styles.textContent}>{url}</Text>
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
