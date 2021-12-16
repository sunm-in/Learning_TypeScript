import styled, { css } from 'styled-components';
import { flexBox } from '../../styles/Mixin';

export interface Prop {
  isFlex?: boolean;
  hoz?: string;
  ver?: string;
  form?: string;
  width?: string;
  height?: string;
  margin?: string;
  bgColor?: string;
  radius?: string;
  padding?: string;
  border?: string;
  fs?: string;
  fw?: string;
  color?: string;
  disColor?: string;
  shadow?: string;
  display?: string;
  addstyle?: any;
  theme: {
    [propName: string]: any;
  };
}

const makeItFlexBox = css<Prop>`
  ${({ hoz, ver }) => flexBox(hoz, ver, 'inline-flex')}
`;

const ButtonStyle = styled.button<Prop>`
  ${({ isFlex }) => isFlex && makeItFlexBox};
  width: ${({ width }) => width};
  height: ${({ height }) => height};
  margin: ${({ margin }) => margin};
  box-shadow: ${({ shadow }) => shadow};
  border-radius: ${({ radius }) => radius};
  color: ${({ color, theme }) => theme.color[color]};
  background-color: ${({ bgColor, theme }) => theme.color[bgColor]};
  cursor: pointer;
  border: ${({ border }) => border};
  display: ${({ display }) => display};
  font-size: ${({ fs, theme }) => fs && theme.fontSize[fs]};
  font-weight: ${({ fw, theme }) => fw && theme.fontWeight[fw]};
  ${({ addstyle }) => addstyle};
`;

export default ButtonStyle;
