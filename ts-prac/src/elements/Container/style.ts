import styled, { css } from 'styled-components';
import { borderBox, flexBox } from '../../styles/Mixin';

export interface Prop {
  isFlex?: boolean;
  padding?: string;
  height?: string;
  addstyle?: any;
}

export const ColumnContainer = css`
  ${flexBox('space-between', null)};
  flex-direction: column;
`;

const ContainerStyle = styled.div<Prop>`
  position: relative;
  max-width: 768px;
  height: ${({ height }) => height};
  min-height: ${({ height }) => height || '100vh'};
  margin: 0 auto;
  ${({ padding }) => borderBox(padding)};
  ${({ addstyle }) => addstyle};
  ${({ isFlex }) => isFlex && ColumnContainer};
  background-color: ${({ theme }) => theme.color.yellow};

  @media (max-width: 800px) {
    max-width: none;
    width: 90%;
    background-color: ${({ theme }) => theme.color.bgColor};
  }
`;

export default ContainerStyle;
