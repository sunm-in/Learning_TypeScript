{
  /**
   * 🔍Discriminated Union Type -> 조금 더 직관적으로 코드를 작성할 수 있고 읽을때도 더 자연스럽다
   */
  // Union 타입에 차별화되는 이름이 동일한 타입을 둠으로써 간편하게 구분할 수 있는 것
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
  // success -> 🎉 body
  // fail -> 😭 reason
  // (state: LoginState): void -> void 생략 가능
  function printLoginState(state: LoginState) {
    // state.result -> success or fail

    if (state.result === 'success') {
      console.log(`🎉 ${state.response.body}`);
    } else {
      console.log(`😭 ${state.reason}`);
    }
  }
}

// {
//   // function: login -> success, fail ⏱
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
//   // success -> 🎉 body
//   // fail -> 😭 reason
//   function printLoginState(state: LoginState) {
//     if (state.result === 'success') {
//       console.log(`🎉 ${state.response.body}`);
//     } else {
//       console.log(`😭 ${state.reason}`);
//     }
//   }
// }
