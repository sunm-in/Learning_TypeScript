/**
 *  Type Assertions 💩
 */
function jsStrFunc(): any {
  return 'hello';
}
const result = jsStrFunc();
// result는 any타입이기 때문에 문자열 타입이 아니라서 문자열 타입에서 사용 가능한 API를 사용할 수 없다.
// 함수에서 문자열 리턴하는 것을 확신할 때 Type Assertion을 사용할 수 있다.
console.log((result as string).length); // (result as string) -> result라는 변수를 문자열처럼 사용할거라는 의미
console.log((<string>result).length); // (<string>result) 이런식으로 작성해도 동일하다.

// 리턴 값이 문자열이 아닌 숫자를 리턴할 때 코드를 작성하는 시점에는 에러나 경고 메세지가 발생하지 않는다.
// 하지만 실행하는 순간 undefined라고 나오는걸 볼 수 있다. (실시간으로 예상하지 못한 문제가 발생할 수 있다.)
// 이러한 이유로 인해 Type Assertion은 100% 장담을 할 수 있을 때 사용해야 한다.

// 에러가 발생하는 예시
const wrong: any = 5;
console.log((wrong as Array<number>).push(1)); // 🚨

function findNumbers(): number[] | undefined {
  return undefined;
}
const numbers = findNumbers();
// numbers.push(2); // numbers는 숫자 배열일 수도 있지만 undefined일 수도 있기 때문에 push를 쓰는 것은 좋지 않다.

// 배열이라고 확신할 때, ! -> 옵션이 아니고 절대적으로 값이 있다고 확신할 때 선택하는 것 -> numbers!.push(2);
numbers!.push(2);
// 함수를 호출한 다음에 느낌표를 붙여도 된다. -> const numbers = findNumbers()!;

// 예시
const button = document.querySelector('class')!; // 100% 확신할 때 뒤에 !를 쓸 수 있다.
button.nodeValue; // button은 null일 수도 있기 때문에 에러 발생
// 이런식으로 접근은 가능하다.
if (button) {
  button.nodeValue;
}

// {
//   /**
//    * Type Assertions 💩
//    */
//   function jsStrFunc(): any {
//     return 2;
//   }
//   const result = jsStrFunc();
//   console.log((result as string).length);
//   console.log((<string>result).length);

//   const wrong: any = 5;
//   console.log((wrong as Array<number>).push(1)); // 😱

//   function findNumbers(): number[] | undefined {
//     return undefined;
//   }
//   const numbers = findNumbers()!;
//   numbers.push(2); // 😱

//   const button = document.querySelector('class')!;
// }
