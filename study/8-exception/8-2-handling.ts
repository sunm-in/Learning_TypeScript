/**
 * 예상하지 못한 에러가 발생하는 그런 것이 있다면 이것을  try catch Handling 할 떄
 * 내가 여기서 처리하는 것이 의미있는 처리를 할 수 있을까라는 생각을 해보는 것이 중요하다.
 */

class NetworkClient {
  tryConnect(): void {
    throw new Error('no network!');
  }
}

class UserService {
  constructor(private client: NetworkClient) {}

  login() {
    this.client.tryConnect();
    // login...
  }
}

class App {
  constructor(private userService: UserService) {}
  run() {
    // try catch에 전달되는 에러는 any type 이기 때문에 타입에 대한 정보가 사라진다. -> instanceOf 를 사용할 수 없다.
    try {
      this.userService.login();
    } catch (error) {
      // show dialog to user
    }
  }
}

const client = new NetworkClient();
const service = new UserService(client);
const app = new App(service);
app.run();
