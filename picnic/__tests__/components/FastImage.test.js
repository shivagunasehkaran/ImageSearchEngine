import React from 'react';
import enzyme, {shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import {FastImage} from '../../src/components/FastImage/FastImage';

enzyme.configure({adapter: new Adapter()});

describe('Fast Image component validation', () => {
  it('renders correctly with Fast Image', async () => {
    const wrapper = shallow(<FastImage />);
    expect(wrapper).toMatchSnapshot();
  });
});
