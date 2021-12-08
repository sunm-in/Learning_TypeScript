import styled from 'styled-components';

interface Prop {
  theme: {
    [propName: string]: any;
  };
}

const HeaderStlye = styled.header<Prop>`
  width: 100%;
  height: 50px;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 9;
  background-color: ${({ theme }) => theme.color.black};
  color: ${({ theme }) => theme.color.white};
`;

export default HeaderStlye;
