import {ColourPalette} from '@assets/styles/ColoursStyles';
import {StyleSheet} from 'react-native';
import {moderateScale} from 'react-native-size-matters';

export const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  inputContainer: {
    flex: 4,
    height: moderateScale(45),
    backgroundColor: ColourPalette.textInputColor,
    flexDirection: 'row',
    alignItems: 'center',
    margin: 20,
    borderRadius: 8,
    borderWidth: 0.1,
  },
  searchIcon: {
    marginLeft: 10,
    width: moderateScale(35),
    height: moderateScale(35),
  },
  clearIcon: {
    width: moderateScale(20),
    height: moderateScale(20),
    position: 'absolute',
    right: 10,
  },
  cancel: {
    flex: 1,
    justifyContent: 'center',
    alignSelf: 'center',
  },
});
