import Details from '@components/Details';
import Error from '@components/Error';
import FastImage from '@components/FastImage';
import InputText from '@components/Input';
import {getRandomAPI, getSearchAPI} from '@services/Services';
import {styles} from '@views/Home/Home.style';
import React, {useEffect, useRef, useState} from 'react';
import {
  FlatList,
  Keyboard,
  SafeAreaView,
  Text,
  TouchableOpacity,
  View,
  ActivityIndicator,
} from 'react-native';
import * as ROUTES from '@routes/Routes';
import {ConstantsText} from '@utills/Constants';

const Home = props => {
  const [keyword, setKeyword] = useState('');
  const [stateName, setStateName] = useState(ConstantsText.randomSelected);
  const [keyBoardFocus, setKeyBoardFocus] = useState(false);
  const [randomData, setRandomData] = useState([]);
  const [searchData, setSearchData] = useState([]);
  const [showCancel, setShowCancel] = useState(false);
  const [isLoading, setLoading] = useState(false);
  const interval = useRef();

  // Remember the latest callback.
  useEffect(() => {
    setLoading(true);
    interval.current = setInterval(() => callRandomAPI(), 10000);
    return () => {
      clearInterval(interval.current);
    };
  }, []);

  // random API call
  async function callRandomAPI() {
    let data = await getRandomAPI();
    setRandomData(data);
    setLoading(false);
  }

  // search API calls after typed 2 chars
  const handleSearchInput = async val => {
    setKeyword(val);
    if (keyword.length == 1) {
      let data = await getSearchAPI(keyword);
      // set search data
      setSearchData(data);
    }
  };

  // go to image details screen
  const goToDetail = item => {
    props.navigation.push(ROUTES.pageNameImageDetails, {item: item});
  };

  // flat list render item
  const renderRow = items => {
    const item = items.item;
    let URL = null;
    if (item && item.images && item.images.downsized_large) {
      URL = item.images.downsized_large.url;
    }
    return (
      <View style={styles.renderItem}>
        <TouchableOpacity
          onPress={() => goToDetail(item)}
          testID={'itemAction'}>
          <FastImage uri={URL} />
        </TouchableOpacity>
      </View>
    );
  };

  // on focus listener
  const onFocusHandler = () => {
    setKeyBoardFocus(true);
    setShowCancel(true);
    setStateName(ConstantsText.searchResults);
    clearInterval(interval.current); // Clear the interval here
  };

  const handleCancel = () => {
    setKeyword('');
    setShowCancel(false);
    setKeyBoardFocus(false);
    setStateName(ConstantsText.randomSelected);
    Keyboard.dismiss();
    interval.current = setInterval(() => callRandomAPI(), 10000);
  };

  const handleClear = () => {
    setKeyword('');
  };

  // calling api for on submit (keyboard)
  const onSubmitHandler = () => {
    Keyboard.dismiss();
  };

  return (
    <View style={styles.container}>
      <SafeAreaView>
        <InputText
          value={keyword}
          onChangeHandler={val => handleSearchInput(val)}
          onFocus={() => onFocusHandler()}
          showCancel={showCancel}
          handleCancel={() => handleCancel()}
          onClear={() => handleClear()}
          onSubmit={() => onSubmitHandler()}
        />
        <Text style={styles.stateText}>{stateName}</Text>
        {isLoading && <ActivityIndicator size="large" />}
        {keyBoardFocus ? (
          <View style={{margin: 20}}>
            <FlatList
              data={searchData}
              renderItem={renderRow}
              keyExtractor={item => item.id.toString()}
              numColumns={3}
            />
          </View>
        ) : (
          <Details randomData={randomData} />
        )}
      </SafeAreaView>
      {/* {!isLoading && <>{!randomData.length ? <Error /> : null}</>}   Error component created to validate { minimal API calls {API rate exceeded} */}
    </View>
  );
};

export default Home;
