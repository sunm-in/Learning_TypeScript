import styled from 'styled-components';

interface Prop {
  theme: {
    [propName: string]: any;
  };
}

export const FormWrap = styled.div<Prop>`
  @media ${(props) => props.theme.deviceSize.desktop} {
    padding: 100px;
  }

  @media ${(props) => props.theme.deviceSize.laptop} {
    padding: 80px;
  }

  @media ${(props) => props.theme.deviceSize.tablet} {
    padding: 70px;
  }

  @media ${(props) => props.theme.deviceSize.mobile} {
    padding: 60px;
  }
`;
