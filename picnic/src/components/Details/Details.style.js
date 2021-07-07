import {ColourPalette} from '@assets/styles/ColoursStyles';
import {StyleSheet} from 'react-native';
import {moderateScale} from 'react-native-size-matters';

export const styles = StyleSheet.create({
  container: {
    backgroundColor: ColourPalette.white,
  },
  fastImage: {
    margin: 30,
    height: moderateScale(300),
  },
  textContent: {
    margin: 15,
    fontSize: 15,
  },
  rating: {
    width: moderateScale(60),
    height: moderateScale(60),
    borderRadius: moderateScale(60) / 2,
    backgroundColor: ColourPalette.gray,
    justifyContent: 'center',
    alignItems: 'center',
    left: 300,
  },
  ratingText: {
    fontSize: 25,
    color: ColourPalette.white,
  },
});
