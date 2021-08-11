{
  // 🔍Array
  // 코드를 좀 더 일관성있게 작성하기 위해 첫 번째 방식으로 작성하는 것이 좋다.
  // (1)
  const fruits: string[] = ['🍎', '🍌'];
  const scores: number[] = [1, 3, 5];
  // (2) const scores: Array<number> = [1, 3, 5];

  // 주어진 데이터를 이용해서 무언가를 출력하거나 어떤것을 할 수 있지만
  // 주어진 데이터를 변경하거나 업데이트 할 수 없을수도 있다.
  // 이럴땐 전달된 인자를 함수 내부에서 변경하지 않도록 하기 위해 타입으로 보장할 수 있는 방법이 있다. => readonly
  function printArray1(fruits: Array<string>) {
    //
  }

  // 🔍readonly
  // 이제 fruits는 절대 변경할 수 없고 데이터를 읽을수만 있다.
  function printArray2(fruits: readonly string[]) {
    // fruits.push // fruits에 새로운 데이터를 넣으려고 하면 에러가 발생한다.
  }

  // 🔍Tuple -> 대신에 interface, type alias, class를 사용하는 것이 좋다.
  // 서로 다른 타입의 데이터를 가질 수 있는 배열
  // Tuple을 사용하는 것을 권장하지 않는다. -> 접근할 때 인덱스처럼 접근하는 것이 가독성이 많이 떨어진다.
  let student: [string, number];
  student = ['name', 123];
  student[0]; // name
  student[1]; // 123
  // 튜플 대신에 오브젝트 또는 클래스 형태로 대신해서 사용하는 것이 좋다
  const [name, age] = student; // 데이터가 정해진 곳이 아니라 이 데이터를 사용하는 곳에서 임의로 name과 age로 결정하고 써야되는 단점이 있다.

  // 무언가를 동적으로 리턴하는데 클래스나 인터페이스로 묶기 힘들고
  // 동적으로 관련있는 다른 타입의 데이터를 묶어서 사용자가 이름을 정의해서 쓸 경우 튜플이 유용하겠지만
  // 그 외에 경우라면 일반적인 타입을 정의해서 쓰는 경우 interface나 type alias로 쓸 수 있진 않은지 잘 생각하고 사용해야 한다.
}

// {
//   // Array
//   const fruits: string[] = ['🍅', '🍌'];
//   const scroes: Array<number> = [1, 3, 4];
//   function printArray(fruits: readonly string[]) {}

//   // Tuple -> interface, type alias, class
//   let student: [string, number];
//   student = ['name', 123];
//   student[0]; // name
//   student[1]; // 123
//   const [name, age] = student;
// }
