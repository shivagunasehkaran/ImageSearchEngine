import React from 'react';
import {TextInput, View, Image, Text, TouchableOpacity} from 'react-native';
import {styles} from '@components/Input/InputText.style';
import * as images from '@assets/styles/Images';

const InputText = props => {
  const {
    onChangeHandler,
    onFocus,
    onSubmit,
    onClear,
    isCancelButtonShown,
    handleCancel,
  } = props;
  return (
    <View style={styles.container}>
      <View style={styles.inputContainer}>
        <Image source={images.images.search} style={styles.searchIcon} />
        <TextInput
          testID={'searchTextInput'}
          style={styles}
          placeholder={'Search'}
          value={props.value}
          onChangeText={val => onChangeHandler(val)}
          onFocus={() => onFocus()}
          onSubmitEditing={() => onSubmit()}
          keyboardType={'email-address'}
          returnKeyType={'search'}
        />
        {isCancelButtonShown && (
          <TouchableOpacity style={styles.clearIcon} onPress={() => onClear()}>
            <Image source={images.images.clear} />
          </TouchableOpacity>
        )}
      </View>
      {isCancelButtonShown && (
        <TouchableOpacity style={styles.cancel} onPress={() => handleCancel()}>
          <Text>{'Cancel'}</Text>
        </TouchableOpacity>
      )}
    </View>
  );
};

export default InputText;
