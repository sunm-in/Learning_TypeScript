{
  // JavaScript
  // old: var 💩 절대 사용x
  // var age = 5;
  // age = 1;

  // let ES6
  let name = 'hello';
  name = 'hi';

  // const
  const age = 5;
  // age = 5; 에러
}

{
  /**
   * JavaScript
   * 한가지의 심플한 데이터를 담을 수 있는 원시타입 Primitive: number, string, boolean, bigint, symbol, null, undefined
   * 좀 더 복잡한 데이터를 담을 수 있는 타입 Object: function, array.....
   */

  // number
  const num: number = -6;

  // string
  const str: string = 'hello';

  // boolean
  const boal: boolean = false;

  // undefined 값이 있는지 없는지 아무것도 결정되지 않은 상태
  let name: undefined; // 💩
  let age: number | undefined; // undefined를 더 많이 이용한다.
  age = undefined;
  age = 1;
  function find(): number | undefined {
    // 무언가가 있고 없을 때 많이 사용한다.
    return undefined;
  }

  // null 값이 비어 있는 상태
  let person: null; // 💩
  let person2: string | null;

  // unknown 알수 없는  💩 웬만하면 쓰지 않는 것이 좋다. 정말 불가피한 경우 타입을 더할 수 있는 방법이 있을때만 사용
  let notSure: unknown = 0;
  notSure = 'he';
  notSure = true;

  // any  💩  웬만하면 쓰지 않는 것이 좋다. 정말 불가피한 경우 타입을 더할 수 있는 방법이 있을때만 사용
  let anything: any = 0;
  anything = 'hello';

  // void
  // 아무것도 리턴하지 않으면 void 타입이 된다.
  // void 생략 가능
  function print(): void {
    console.log('hello');
    return;
  }
  let unusable: void = undefined; // 💩

  // never
  // 리턴하는 값이 없다.
  // 함수에서 절대 리턴하지 않는 경우에 그것을 명시하기 위해 쓰인다.
  function throwError(message: string): never {
    // message -> server (log)
    throw new Error(message);
    // while(true) {

    // }
    // return; 에러
    // never 타입은 절대로 다른 것을 리턴할 수 없고
    // 에러를 던져주는 코드를 작성하던지 while문을 돌면서 끝나지 않게 계속 코드를 작성해야 한다.
  }
  let neverEnding: never; // 💩

  // object
  // 💩 광범위하고 추상적이기 때문에 쓰지 않는 것이 좋다.
  // 가능하면 어떤 타입인지 명시해주는 것이 좋다.
  // 원시타입을 제외한 모든 object를 전달할 수 있다.
  let obj: object;
  function acceptSomeObject(obj: object) {}
  acceptSomeObject({ name: 'sunmin' });
  acceptSomeObject({ animal: 'dog' });
}
