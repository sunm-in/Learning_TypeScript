{
  // 타입을 정의한다는 것은 우리가 좀 더 안정적으로 프로그래밍 할 수 있도록 도와주고
  // 타입을 정의함으로써 조금 더 나은 문서화를 하는 효과가 있다.
  // 직관적으로 함수가 어떤것들을 받아서 어떤 일을 하는지 이해하는데에 도움이 된다.

  // JavaScript 💩
  function jsAdd(num1, num2) {
    return num1 + num2;
  }

  // TypeScript ✨
  function add(num1: number, num2: number): number {
    return num1 + num2;
  }

  // JavaScript 💩
  function jsFetchNum(id) {
    // code ...
    // code ...
    // code ...
    return new Promise((resolve, reject) => {
      resolve(100);
    });
  }

  // TypeScript ✨
  function FetchNum(id: string): Promise<number> {
    // code ...
    // code ...
    // code ...
    return new Promise((resolve, reject) => {
      resolve(100);
    });
  }

  // JavaScript ✨ => TypeScript
  // 자바스크립트에서도 사용이 가능하고 타입스크립트에서 더 활용도를 높일 수 있는 타입이 더해진 함수 정의 방법
  // 🔍Optional parameter
  function printName(firstName: string, lastName?: string) {
    console.log(firstName);
    console.log(lastName);
  }
  printName('Sunmin', 'Lee'); // Sunmin Lee

  // (firstName: string, lastName: string)
  // 함수를 호출할 때 정해진 인자 개수대로 정확하게 전달을 해줘야 하고
  // 정해진 타입대로 전달하지 않으면 에러가 발생한다.
  // printName('aaa')
  // printName('aaa', 0);

  // 이렇게 전달 받을수도 있고 안받을수도 있다고 명시를 해주면 => (firstName: string, lastName?: string)
  // 첫 번째 인자는 꼭 문자열 타입으로 전달해야 하지만, lastName은 문자열 타입으로 전달해도 되고 안 해도 된다.
  printName('Sunmin', 'Lee'); // Sunmin Lee
  printName('Sunmin'); // Sunmin undefined
  printName('aaa', undefined); // aaa undefined

  // (firstName: string, lastName: string| undefined) 이렇게 명시를 해줄 땐
  // printName('Sunmin', undefined); 무조건 정확하게 명시를 해줘야 한다.

  // 🔍Default parameter
  // 아무것도 전달하지 않고 기본 메세지로 전달하고 싶을 때 default 값을 지정할 수 있다.
  // Optional parameter에서는 아무것도 전달하지 않으면 undefined로 나오지만
  // Default parameter에서는 전달하지 않으면 기본값으로 설정된다.
  function printMessage(message: string = 'default message') {
    console.log(message); // default message
  }
  printMessage();

  // 🔍Rest parameter
  // 갯수에 상관없이 동일한 타입의 데이터를 함수의 인자로 전달할 때 Rest parameter를 사용할 수 있다.
  function addNumbers(...numbers: number[]): number {
    return numbers.reduce((a, b) => a + b);
  }
  console.log(addNumbers(1, 2));
  console.log(addNumbers(1, 2, 3, 4));
  console.log(addNumbers(1, 2, 3, 4, 5, 0));
}
