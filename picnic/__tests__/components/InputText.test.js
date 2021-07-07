import InputText from '@components/Input/InputText';
import enzyme, {shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import React from 'react';

enzyme.configure({adapter: new Adapter()});

describe('InputText component validation', () => {
  it('renders correctly with input textfield', async () => {
    const wrapper = shallow(<InputText />);
    expect(wrapper).toMatchSnapshot();
  });

  it('should call onChange with input value', () => {
    const changeHandler = text => {
      return 'monkey';
    };
    const submitHandler = text => {
      return 'submit';
    };

    const onFocusMock = jest.fn();

    const component = shallow(
      <InputText
        onChangeHandler={changeHandler}
        onFocus={onFocusMock}
        value={'sample'}
        onSubmitHandler={submitHandler}
      />,
    );
    const inputText = component.find('InputText');
    const textInputNode = inputText
      .findWhere(node => node.prop('testID') === 'searchTextInput')
      .at(0);

    //Check for onFocus text
    expect(onFocusMock).toBeCalledTimes(0);

    //Check for onChanage text
    expect(textInputNode.props().onChangeText()).toEqual('monkey');
    //check for Submit action
    expect(textInputNode.props().onSubmitEditing()).toEqual('submit');
  });
});
