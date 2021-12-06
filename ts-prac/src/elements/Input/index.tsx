import React from 'react';
import InputStyle from './style';

export interface Props {
  width?: string;
  height?: string;
  bgColor?: string;
  padding?: string;
  radius?: string;
  border?: string;
  fs?: string;
  shadow?: string;
  id?: string;
  type?: string;
  name?: string;
  value?: string;
  accept?: string;
  placeholder?: string;
  _onChange?: any;
  _onKeyPress?: any;
  addstyle?: any;
}

const Input: React.FC<Props> = ({
  id,
  type,
  value,
  name,
  accept,
  placeholder,
  _onChange,
  _onKeyPress,
  ...props
}): React.ReactElement => {
  return (
    <InputStyle
      id={id}
      type={type}
      name={name}
      value={value}
      placeholder={placeholder}
      accept={accept}
      onChange={_onChange}
      onKeyPress={_onKeyPress}
      {...props}
    />
  );
};

Input.defaultProps = {
  _onChange: () => {},
  _onKeyPress: () => {},
  type: 'text',
  placeholder: '',
  width: '100%',
  height: '48px',
  bgColor: 'white',
  padding: '0 12px',
  radius: '14px',
  border: '1px solid white',
};

export default Input;
