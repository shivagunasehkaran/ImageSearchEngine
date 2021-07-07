import {ColourPalette} from '@assets/styles/ColoursStyles';
import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: ColourPalette.white,
  },
  titleText: {
    textAlign: 'center',
    fontSize: 20,
  },
  textContent: {
    marginHorizontal: 20,
    fontSize: 15,
  },
});
