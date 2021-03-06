{
  /**
   * πUnion Types: OR
   */
  // λͺ¨λ  κ°λ₯ν μΌμ΄μ€ μ€μ λ°μν  μ μλ λ± νκ°μ§λ§ λ΄μ μ μλ νμμ λ§λ€κ³  μΆμ λ μ΄μ©νλ€.
  // Union Typeμ νμμ€ν¬λ¦½νΈμμ νμ©λκ° κ΅μ₯ν λμ νμμ΄λ€.
  type Direction = 'left' | 'right' | 'up' | 'down';
  function move(direction: Direction) {
    console.log(direction);
  }
  move('down');

  type TileSize = 8 | 16 | 32;
  const tile: TileSize = 16;

  // function: login -> success, fail
  type SuccessState = {
    response: {
      body: string;
    };
  };
  type FailState = {
    reason: string;
  };

  type LoginState = SuccessState | FailState;
  function login(id: string, password: string): LoginState {
    return {
      response: {
        body: 'logged in!',
      },
    };
  }

  // printLoginState(state: LoginState)
  // success -> π body
  // fail -> π­ reason
  // (state: LoginState): void -> void μλ΅ κ°λ₯
  function printLoginState(state: LoginState) {
    if ('response' in state) {
      console.log(`π ${state.response.body}`);
    } else {
      console.log(`π­ ${state.reason}`);
    }
  } // μ΄λ° λ°©μμΌλ‘ νλ κ²μ μ’μ§ μμ λ°©μμ΄λ€.
}

// {
//   /**
//    *  Union Types: OR
//    */
//   type Direction = 'left' | 'right' | 'up' | 'down';
//   function move(direction: Direction) {
//     console.log(direction);
//   }
//   move('down');

//   type TileSize = 8 | 16 | 32;
//   const tile: TileSize = 16;

//   // function: login -> success, fail β±
//   type SuccessState = {
//     response: {
//       body: string;
//     };
//   };
//   type FailState = {
//     reason: string;
//   };
//   type LoginState = SuccessState | FailState;

//   function login(): LoginState {
//     return {
//       response: {
//         body: 'logged in!',
//       },
//     };
//   }

//   // printLoginState(state: LoginState)
//   // success -> π body
//   // fail -> π­ reason
//   function printLoginState(state: LoginState) {
//     if ('response' in state) {
//       console.log(`π ${state.response.body}`);
//     } else {
//       console.log(`π­ ${state.reason}`);
//     }
//   }
// }
