{
  /**
   * πDiscriminated Union Type -> μ‘°κΈ λ μ§κ΄μ μΌλ‘ μ½λλ₯Ό μμ±ν  μ μκ³  μ½μλλ λ μμ°μ€λ½λ€
   */
  // Union νμμ μ°¨λ³νλλ μ΄λ¦μ΄ λμΌν νμμ λ μΌλ‘μ¨ κ°νΈνκ² κ΅¬λΆν  μ μλ κ²
  // function: login -> success, fail
  type SuccessState = {
    result: 'success';
    response: {
      body: string;
    };
  };
  type FailState = {
    result: 'fail';
    reason: string;
  };

  type LoginState = SuccessState | FailState;
  function login(id: string, password: string): LoginState {
    return {
      result: 'success',
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
    // state.result -> success or fail

    if (state.result === 'success') {
      console.log(`π ${state.response.body}`);
    } else {
      console.log(`π­ ${state.reason}`);
    }
  }
}

// {
//   // function: login -> success, fail β±
//   type SuccessState = {
//     result: 'success';
//     response: {
//       body: string;
//     };
//   };
//   type FailState = {
//     result: 'fail';
//     reason: string;
//   };
//   type LoginState = SuccessState | FailState;

//   function login(): LoginState {
//     return {
//       result: 'success',
//       response: {
//         body: 'logged in!',
//       },
//     };
//   }

//   // printLoginState(state: LoginState)
//   // success -> π body
//   // fail -> π­ reason
//   function printLoginState(state: LoginState) {
//     if (state.result === 'success') {
//       console.log(`π ${state.response.body}`);
//     } else {
//       console.log(`π­ ${state.reason}`);
//     }
//   }
// }
