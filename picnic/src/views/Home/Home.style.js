import {ColourPalette} from '@assets/styles/ColoursStyles';
import {StyleSheet} from 'react-native';
import {moderateScale} from 'react-native-size-matters';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: ColourPalette.white,
  },
  stateText: {
    marginLeft: 20,
  },
  titleText: {
    marginHorizontal: 20,
  },
  renderItem: {
    flex: 1,
    height: moderateScale(100),
    margin: 5,
  },
});
