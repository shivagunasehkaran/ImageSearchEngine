import {StyleSheet} from 'react-native';
import {moderateScale} from 'react-native-size-matters';

export const styles = StyleSheet.create({
  container: {
    height: moderateScale(30),
    flexDirection: 'row',
  },
  backView: {
    marginLeft: 10,
  },
  back: {
    fontSize: 15,
    fontWeight: 'bold',
  },
  title: {
    fontSize: 15,
    paddingLeft: 10,
  },
});
