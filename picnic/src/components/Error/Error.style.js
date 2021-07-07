import {ColourPalette} from '@assets/styles/ColoursStyles';
import {StyleSheet} from 'react-native';
import {moderateScale} from 'react-native-size-matters';

export const styles = StyleSheet.create({
  container: {
    backgroundColor: ColourPalette.error,
    height: moderateScale(50),
    justifyContent: 'center',
    alignItems: 'center',
    bottom: 0,
    position: 'absolute',
    width: '100%',
  },
  errroText: {
    fontSize: 17,
    color: ColourPalette.white,
    fontWeight: '600',
  },
});
