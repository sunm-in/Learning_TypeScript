import React from 'react';
import { Grid } from './elements';

// componrnt
import Header from './components/Header';
import AddTodo from './components/AddTodoForm';

function App() {
  return (
    <div style={{ width: '100%', height: '100vh' }}>
      <Header />
      <AddTodo />
    </div>
  );
}

export default App;
