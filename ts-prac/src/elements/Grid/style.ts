import styled, { css } from 'styled-components';
import { flexBox, floatBox, borderBox, textProps } from '../../styles/Mixin';

export interface Prop {
  isFlex?: boolean;
  hoz?: string;
  ver?: string;
  column?: boolean;
  width?: string;
  height?: string;
  margin?: string;
  bgColor?: string;
  radius?: string;
  overflow?: string;
  padding?: string;
  border?: string;
  fs?: string;
  fw?: string;
  color?: string;
  lh?: string;
  textAlign?: string;
  position?: string;
  top?: string;
  right?: string;
  bottom?: string;
  left?: string;
  z?: string;
  cursor?: string;
  addstyle?: any;
  theme: {
    [propName: string]: any;
  };
}

const makeItFlexBox = css<Prop>`
  ${({ hoz, ver, column }) => css`
    ${flexBox(hoz, ver)}
    ${column && `flex-direction: column`}
  `}
`;

const GridStyle = styled.div<Prop>`
  ${({ isFlex }) => isFlex && makeItFlexBox}
  width: ${({ width }) => width};
  height: ${({ height }) => height};
  margin: ${({ margin }) => margin};
  background-color: ${({ bgColor, theme }) => theme.color[bgColor]};
  border-radius: ${({ radius }) => radius};
  overflow: ${({ overflow }) => overflow};
  cursor: ${({ cursor }) => cursor};

  ${({ padding }) => borderBox(padding)};
  ${({ fs, fw, color, lh, textAlign }) => textProps(fs, fw, color, lh, textAlign)}
  ${({ position, top, right, bottom, left, z }) => floatBox(position, top, right, bottom, left, z)};
  ${({ addstyle }) => addstyle}
`;

export default GridStyle;
