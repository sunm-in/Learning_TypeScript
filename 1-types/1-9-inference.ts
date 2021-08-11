/**
 * Type Inference
 */
// 타입을 우리가 명확하게 계속 명시해야 되는 경우보다는 알아서 자동으로 타입이 결정되는 경우가 있다.
// text라는 변수는 선언함과 동시에 문자열을 할당했기 때문에 타입스크립트에서 자동으로 스트링이라고 타입을 유추할 수 있다.
let text = 'hello';
// text = 1; 에러 발생
function print(message = 'hello') {
  console.log(message);
}
print('hello');

// 타입스크립트는 숫자 두 개를 받아서 더했으니까 리턴 되는 값이 숫자라고 자동으로 타입이 추론되어진다.
function add(x: number, y: number) {
  return x + y;
}
// add함수를 호출하게 되면 이 함수는 숫자를 리턴하기 때문에 result는 자동으로 숫자 타입으로 결정된다.
const result = add(1, 2);
// 💩 타입 추론 -> ✅ 타입을 정확하게 명시하는 것이 좋다. 다만 원시 타입같은 경우는 뻔하기 때문에 생략 가능
// 함수에서는 따로 실행되는 코드가 안에 많이 들어 있기 때문에 정확하게 타입을 명시하는 것이 좋다.
// void는 생략 가능

// -------

// /**
//  * Type Inference
//  */
// let text = 'hello';
// function print(message = 'hello') {
//   console.log(message);
// }
// print('hello');

// function add(x: number, y: number): number {
//   return x + y;
// }
// const result = add(1, 2);
