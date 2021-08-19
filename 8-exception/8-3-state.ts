{
  // 가급적이면 프로그래밍을 할 때 본인이 예상할 수 있는 상태(성공적인 상태와 실패적인 상태)가 있으면
  // 이런 것들을 타입으로 정의하는 것이 조금 더 깔끔하고 안정적이고 예상 가능하게 프로그래밍을 할 수 있다.
  type NetworkErrorState = {
    result: 'fail';
    // ErrorState에서 왜 실패했는지 reason을 세부적으로 작성하면 좋다.
    reason: 'offline' | 'down' | 'timeout'; // union type
  };

  type SuccessState = {
    result: 'success';
  };

  type ResultState = SuccessState | NetworkErrorState;
  class NetworkClient {
    tryConnect(): ResultState {
      return {
        result: 'success',
      };
    }
  }

  class UserService {
    constructor(private client: NetworkClient) {}

    login() {
      this.client.tryConnect();
    }
  }

  class App {
    constructor(private userService: UserService) {}
    run() {
      try {
        this.userService.login();
      } catch (error) {
        // show dialog to use
      }
    }
  }

  const client = new NetworkClient();
  const service = new UserService(client);
  const app = new App(service);
  app.run();
}
