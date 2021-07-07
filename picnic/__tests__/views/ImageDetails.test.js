import ImageDetails from '@views/ImageDetails';
import enzyme, {shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import React from 'react';

enzyme.configure({adapter: new Adapter()});

describe('Image details screen validation', () => {
  const randomData = {
    url: '/url.png',
    title: 'test',
  };

  it('renders correctly with image detail elments', async () => {
    const wrapper = shallow(<ImageDetails navigation={randomData} />);
    expect(wrapper).toMatchSnapshot();
  });
});
