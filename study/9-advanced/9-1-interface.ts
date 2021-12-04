{
  // 🔍 Type Alias와 Interface 구현 차이
  type PositionType = {
    x: number;
    y: number;
  };
  interface PositionInterface {
    x: number;
    y: number;
  }

  // Type Alias와 Interface 둘 다 가능한 것 -> ⭐️
  // object ⭐️
  const obj1: PositionType = {
    x: 1,
    y: 1,
  };
  const obj2: PositionInterface = {
    x: 1,
    y: 1,
    z: 1,
  };

  // class ⭐️
  class Pos1 implements PositionType {
    x: number;
    y: number;
  }
  class Pos2 implements PositionInterface {
    x: number;
    y: number;
    z: number;
  }

  // Extends ⭐️
  interface ZPositionInterface extends PositionInterface {
    z: number;
  }
  type ZPositionType = PositionType & { z: number };

  // ✅ only interface can be merged
  interface PositionInterface {
    z: number;
  }

  // type PositionType {
  // }

  // ✅ Type aliases can use computed properties
  type Person = {
    name: string;
    age: number;
  };
  type Name = Person['name']; // string

  type NumberType = number;
  type Direction = 'left' | 'right'; // 유니온 타입은 인터페이스로는 절대 구현할 수 없다.

  /**
   * 🔍 Type Alias와 Interface 구현 차이 (개념 측면)
   *
   *
   * 👀 Interface -> 어떤 것의 규격 사항
   * 다른 사람들과 의사소통할 때, 오브젝트와 오브젝트 간의 의사소통을 할 때 이 정해진 인터페이스를 토대로 해서 서로 간의 상호 작용을 할 수 있도록 도와준다.
   * API는 서로간의 약속을 할 수 있는 계약서와 동일하다.
   * ✅ 어떤 특정한 규격을 정의하거나 이 규격을 통해서 어떤 것이 구현된다면 인터페이스를 쓰는 것이 더 정확하다.
   *
   *
   * 👀 Types
   * -> 어떠한 데이터를 담을 때, 어떠한 데이터를 담을 수 있을지 이 데이터의 모습 데이터의 타입을 결정한다.
   * ✅ 어떠한 것을 구현할 목적으로 만드는 것이 아니라 데이터를 담을 목적으로 만든다면 인터페이스보다는 타입을 쓰는 것이 조금 더 좋다.
   *
   *
   * 인터페이스와 타입을 구분해서 쓰는 게 더 좋다.
   */
}
