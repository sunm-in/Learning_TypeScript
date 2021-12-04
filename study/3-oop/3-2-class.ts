{
  // 객체지향적으로 커피기계 만들기
  type CoffeeCup = {
    shots: number;
    hasMilk: boolean;
  };

  class CoffeeMaker {
    /**
     * 멤버변수로 두게 되면 오브젝트를 만들 때마다 중복적으로 데이터가 생성되기 때문에 메모리에 낭비가 될 수 있다.
     * -> static이라는 키워드를 붙이게 되면 클레스 레벨로 지정이 된다.
     * 클래스 레벨 -> 클래스와 연결이 되어 있기 때문에 오브젝트마다 만들어지거나 생성되지 않는다.
     *
     * 사용할 때는 클래스 안에 있는 this 안에 있는 것이 아니라 클래스 자체에 있는 거기 때문에 this를 쓰지 않고 클래스 이름을 지정해줘야 한다.
     * CoffeeMaker.BEANS_GRAMM_PER_SHOT
     */
    static BEANS_GRAMM_PER_SHOT: number = 7; // class level
    coffeeBeans: number = 0; // instance (object) level

    // constructor -> 클래스를 가지고 오브젝트 인스턴스를 만들 때 항상 처음에 호출되는 함수
    // 전달하는 함수는 원하는대로 써도 상관없다.
    constructor(coffeeBeans: number) {
      // this.coffeeBeans는 클래스 안에 있는걸 가리키고 coffeeBeans는 함수 안에 들어온 인자를 가리킨다.
      this.coffeeBeans = coffeeBeans;
    }

    static makeMachine(coffeeBeans: number): CoffeeMaker {
      return new CoffeeMaker(coffeeBeans);
    }

    makeCoffee(shots: number): CoffeeCup {
      // 클래스 안에 있는 멤버변수에 접근할 땐 this를 이용해서 접근한다.
      if (this.coffeeBeans < shots * CoffeeMaker.BEANS_GRAMM_PER_SHOT) {
        throw new Error('Not enough coffee beans!');
      }
      this.coffeeBeans -= shots * CoffeeMaker.BEANS_GRAMM_PER_SHOT;
      return {
        // key와 value의 이름이 같다면 생략 가능
        // shots: shots,
        shots,
        hasMilk: false,
      };
    }
  }

  const maker = new CoffeeMaker(32);
  console.log(maker); // static 키워드가 없을 때 -> CoffeeMaker { BEANS_GRAMM_PER_SHOT: 7, coffeeBeans: 32 }
  // static 키워드가 있을 때 -> CoffeeMaker { coffeeBeans: 32 }

  const maker2 = new CoffeeMaker(14);
  console.log(maker2); // CoffeeMaker { coffeeBeans: 14 }

  const maker3 = CoffeeMaker.makeMachine(3);
  console.log(maker3); // CoffeeMaker { coffeeBeans: 3 }
}

// {
//   type CoffeeCup = {
//     shots: number;
//     hasMilk: boolean;
//   };

//   class CoffeeMaker {
//     static BEANS_GRAMM_PER_SHOT: number = 7; // class level
//     coffeeBeans: number = 0; // instance (object) level

//     constructor(coffeeBeans: number) {
//       this.coffeeBeans = coffeeBeans;
//     }

//     static makeMachine(coffeeBeans: number): CoffeeMaker {
//       return new CoffeeMaker(coffeeBeans);
//     }

//     makeCoffee(shots: number): CoffeeCup {
//       if (this.coffeeBeans < shots * CoffeeMaker.BEANS_GRAMM_PER_SHOT) {
//         throw new Error('Not enough coffee beans!');
//       }
//       this.coffeeBeans -= shots * CoffeeMaker.BEANS_GRAMM_PER_SHOT;
//       return {
//         shots,
//         hasMilk: false,
//       };
//     }
//   }

//   const maker = new CoffeeMaker(32);
//   console.log(maker);
//   const maker2 = new CoffeeMaker(14);
//   console.log(maker2);

//   const maker3 = CoffeeMaker.makeMachine(3);
// }
