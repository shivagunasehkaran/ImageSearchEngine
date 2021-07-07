import Details from '@components/Details';
import FastImage from '@components/FastImage';
import InputText from '@components/Input';
import * as ROUTES from '@routes/Routes';
import {getRandomAPI, getSearchAPI} from '@services/Services';
import {ConstantsText} from '@utills/Constants';
import {styles} from '@views/Home/Home.style';
import React, {useEffect, useRef, useState} from 'react';
import {
  ActivityIndicator,
  FlatList,
  Keyboard,
  SafeAreaView,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

const Home = props => {
  const [keyword, setKeyword] = useState('');
  const [stateName, setStateName] = useState(ConstantsText.randomSelected);
  const [isKeyBoardFocus, setKeyBoardFocus] = useState(false);
  const [randomData, setRandomData] = useState([]);
  const [searchData, setSearchData] = useState([]);
  const [isCancelButtonShown, setCancelButtonShown] = useState(false);
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
  const handleSearchAPIRequest = async val => {
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

  const setTextInputvalues = (cancelflag, text, focusFlag) => {
    // flag for cancel button
    setCancelButtonShown(cancelflag);
    // txt constants
    setStateName(text);
    // flag for keyboard focus
    setKeyBoardFocus(focusFlag);
  };

  // on focus listener
  const onInputFocusHandler = () => {
    setTextInputvalues(true, ConstantsText.searchResults, true);
    clearInterval(interval.current); // Clear the interval here
  };

  // click cancel
  const handleCancelButton = () => {
    handleTextInputClear();
    // set values for text input
    setTextInputvalues(false, ConstantsText.randomSelected, false);
    onSubmitHandler();
    interval.current = setInterval(() => callRandomAPI(), 10000);
  };

  // clear text input
  const handleTextInputClear = () => {
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
          onChangeHandler={val => handleSearchAPIRequest(val)}
          onFocus={() => onInputFocusHandler()}
          isCancelButtonShown={isCancelButtonShown}
          handleCancel={() => handleCancelButton()}
          onClear={() => handleTextInputClear()}
          onSubmit={() => onSubmitHandler()}
        />
        <Text style={styles.stateText}>{stateName}</Text>
        {isLoading && <ActivityIndicator size="large" />}
        {isKeyBoardFocus ? (
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
    </View>
  );
};

export default Home;
