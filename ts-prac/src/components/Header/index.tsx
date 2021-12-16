import React from 'react';

// element
import { Container, Grid } from '../../elements';

// style
import HeaderStlye from './style';

// router
import { useLocation } from 'react-router-dom';

const Header = (props) => {
  return (
    <HeaderStlye>
      <Container height='20px'>
        <h1 style={{ textAlign: 'center', fontSize: '30px', fontWeight: 'bold' }}>TodoList</h1>
      </Container>
    </HeaderStlye>
  );
};

export default Header;
