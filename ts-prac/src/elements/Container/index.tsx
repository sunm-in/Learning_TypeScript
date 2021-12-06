import React from 'react';
import ContainerStyle from './style';

export interface Props {
  isFlex?: boolean;
  padding?: string;
  height?: string;
  addstyle?: any;
}

const Container: React.FC<Props> = ({ children, ...props }): React.ReactElement => {
  return <ContainerStyle {...props}>{children}</ContainerStyle>;
};

Container.defaultProps = {
  padding: '0',
};

export default Container;
