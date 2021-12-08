import React from 'react';

// element
import { Grid, Container } from '../../elements';

// style
import HeaderStlye from './style';

const Header = (props) => {
  return (
    <HeaderStlye>
      <Container height='30px'>
        <Grid>
          <p>TodoList</p>
        </Grid>
      </Container>
    </HeaderStlye>
  );
};

export default Header;
