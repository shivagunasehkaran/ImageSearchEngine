import Details from '@components/Details/Details';
import enzyme, {shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import React from 'react';

enzyme.configure({adapter: new Adapter()});

describe('Image details component validation', () => {
  it('renders correctly with image detail elments', async () => {
    const wrapper = shallow(<Details />);
    expect(wrapper).toMatchSnapshot();
  });

  it('should render with text elements', async () => {
    const wrapper = shallow(<Details />);
    expect(wrapper.find('Text')).toHaveLength(3);
  });

});
