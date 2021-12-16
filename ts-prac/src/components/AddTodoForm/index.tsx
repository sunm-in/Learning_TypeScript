import React from 'react';

// style
import { css } from 'styled-components';
import { FormWrap } from './style';

// element
import { Grid, Button, Input, Container } from '../../elements';

const AddTodo = () => {
  return (
    <Container
      height='100vh'
      addstyle={() => {
        return css`
          background-color: #fdcb6e;
        `;
      }}
    >
      <FormWrap>
        <h1 style={{ color: 'black', textAlign: 'center', fontSize: '20px', fontWeight: 'bold' }}>
          오늘의 할 일을 기록하세요!
        </h1>
        <Grid margin='5% auto' width='80%'>
          <Input placeholder='Title' margin='4% auto'></Input>
          <Input placeholder='Date' margin='auto'></Input>
        </Grid>
        <Button type='submit' height='40px' width='80px' margin='0 auto'>
          Write
        </Button>
      </FormWrap>
    </Container>
  );
};

export default AddTodo;
