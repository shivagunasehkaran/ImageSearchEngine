import * as ServicesAPI from '@services/Services';
import Home from '@views/Home';
import enzyme, {mount, shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import React from 'react';
import {Alert} from 'react-native';
import renderer from 'react-test-renderer';
import InputText from '@components/Input/InputText';

jest.mock('@services/Services');

enzyme.configure({adapter: new Adapter()});

describe('Home screen', () => {
  it('renders correctly with all home screen values', async () => {
    const wrapper = shallow(<Home />);
    expect(wrapper).toMatchSnapshot();
  });

  it('should render input element properly', async () => {
    const wrapper = shallow(<InputText value={'keyword'} />);
    expect(wrapper).toMatchSnapshot();
  });

  // integration testing
  it('render search results when keyword changes', async () => {
    const onSearch = jest.fn();
    const wrapper = shallow(<InputText value={'keyword'} />);
    wrapper.find('TextInput').simulate('changeTextHandler', 'test search text');
    expect(onSearch).toHaveBeenCalledWith('test search text');
  });

  it('should render the home screen without breaking', async () => {
    const rendered = renderer.create(<Home />).toJSON();
    expect(rendered).toBeTruthy();
  });

  it('should render state text element', async () => {
    const wrapper = shallow(<Home />);
    expect(wrapper.find('Text')).toHaveLength(1);
  });

  it('should flatlist return keyExtractor correctly', () => {
    const item = [
      {
        id: '1',
        age: 30,
        name: 'shiva',
      },
      {
        id: '2',
        age: 31,
        name: 'gautham',
      },
    ];
    const wrapper = shallow(<Home item={item} />);
    expect(wrapper.find('FlatList').length).toEqual(0);
  });

  it('navigate: renders correctly with default', async () => {
    const fakeNavigation = {
      push: jest.fn(),
    };
    const wrapper = mount(<Home navigation={fakeNavigation} />);
    var home = wrapper.find('Home');
    const node = home
      .findWhere(node => node.prop('testID') === 'itemAction')
      .at(0);
    node.simulate('click');
  });
});

describe('Home screen : random API', () => {
  it('random api success', async () => {
    const spy = jest
      .spyOn(ServicesAPI, 'getRandomAPI')
      .mockImplementation(url => {
        return new Promise(resolve => resolve('test'));
      });
    await new Promise(resolve => setTimeout(resolve, 100));
    expect(spy).toHaveBeenCalledWith({url: 'http://dummyURL.com/'});
  });

  it('random api with error message', async () => {
    const alertSpy = jest.spyOn(Alert, 'alert');
    jest.spyOn(ServicesAPI, 'getRandomAPI').mockImplementation(url => {
      return new Promise(resolve => resolve([]));
    });
    await new Promise(resolve => setTimeout(resolve, 100));
    expect(alertSpy).toBeCalled();
    wrapper.update();
    alertSpy.mock.calls[1][2][0].onPress();
  });
});

describe('Home screen : search API', () => {
  it('search api success', async () => {
    const spy = jest
      .spyOn(ServicesAPI, 'getSearchAPI')
      .mockImplementation(url => {
        return new Promise(resolve => resolve(['test']));
      });

    const wrapper = shallow(<Home />);
    var homeView = wrapper.find('Home');
    const node = homeView
      .findWhere(node => node.prop('testID') === 'itemAction')
      .at(0);
    node.simulate('click');
    expect(spy).toHaveBeenCalledWith({url: 'http://dummyURL.com/'});
  });

  it('search api error', async () => {
    jest.spyOn(ServicesAPI, 'getSearchAPI').mockImplementation(() => {
      return new Promise(resolve => resolve([]));
    });
    const wrapper = shallow(<Home />);
    var homeView = wrapper.find('Home');
    const node = homeView
      .findWhere(node => node.prop('testID') === 'itemAction')
      .at(0);
    node.simulate('click');
    expect(node).toEqual({});
  });
});
