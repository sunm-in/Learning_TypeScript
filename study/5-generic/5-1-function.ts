{
  /**
   * 타입을 알 수 없는 자바스크립트 라이브러리에서 이런 함수는 유용할 수가 있다.
   * 예를 들어 쿼리셀렉터
   */
  function checkNotNullBad(arg: number | null): number {
    if (arg == null) {
      throw new Error('not valid number!');
    }
    return arg;
  }
  const result = checkNotNullBad(123);
  console.log(result); // 123
  checkNotNullBad(null); // not valid number!

  // any를 쓰는건 나쁜 예제다 -> 타입에 정보가 없어지기 때문
  function checkNotNullAnyBad(arg: any | null): any {
    if (arg == null) {
      throw new Error('not valid number');
    }
    return arg;
  }
  const result2 = checkNotNullAnyBad(123);

  /**
   * ✅ 이럴 때 바로 제네릭을 이용할 수 있다.
   * 제네릭을 이용하면 어떤 타입이든지 받을 수 있고 코딩을 할 때 타입이 결정되기 때문에 타입을 더 보장받을 수 있다.
   */
  // 👀 타입은 보통 길게 안쓰고 T 이런 식으로 대문자 하나만 쓴다.
  function checkNotNull<T>(arg: T | null): T {
    if (arg == null) {
      throw new Error('not valid number');
    }
    return arg;
  }
  const number = checkNotNull(123);
  // 👉 이처럼 제네릭을 이용하면 사용하는 사람이 어떤 타입인지 결정할 수 있고 유연하지만 타입이 보장받을 수 있다.
  const boal: boolean = checkNotNull(true);
}
