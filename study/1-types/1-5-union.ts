{
  /**
   * 🔍Union Types: OR
   */
  // 모든 가능한 케이스 중에 발생할 수 있는 딱 한가지만 담을 수 있는 타입을 만들고 싶을 때 이용한다.
  // Union Type은 타입스크립트에서 활용도가 굉장히 높은 타입이다.
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
  // success -> 🎉 body
  // fail -> 😭 reason
  // (state: LoginState): void -> void 생략 가능
  function printLoginState(state: LoginState) {
    if ('response' in state) {
      console.log(`🎉 ${state.response.body}`);
    } else {
      console.log(`😭 ${state.reason}`);
    }
  } // 이런 방식으로 하는 것은 좋지 않은 방식이다.
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

//   // function: login -> success, fail ⏱
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
//   // success -> 🎉 body
//   // fail -> 😭 reason
//   function printLoginState(state: LoginState) {
//     if ('response' in state) {
//       console.log(`🎉 ${state.response.body}`);
//     } else {
//       console.log(`😭 ${state.reason}`);
//     }
//   }
// }
