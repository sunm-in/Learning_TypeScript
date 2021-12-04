{
  // Encapsulation 캡슐화 시켜보기
  // 클래스를 만들 때에 외부에서 보일 수 있는 외부에서 접근할 수 있는 것은 무엇인지
  // 그리고 내부적으로만 가지고 있어야 되는 데이터는 무엇인지 이런 것들을 결정할 수 있다.
  // 그래서 외부에 노출해도 되는 것은 무엇인지 이런 것들을 잘 생각해서 클래스를 디자인하는 것이 중요하다.
  type CoffeeCup = {
    shots: number;
    hasMilk: boolean;
  };

  // 🔍 public     -> 따로 명시하지 않으면 기본적으로 public으로 되어있다. 외부에서 공개적으로 볼 수 있다.
  // 🔍 private    -> 외부에서 절대 볼 수 없고 접근도 할 수 없는 상테가 된다.
  // 🔍 protected  -> 상속을 할 때 외부에서는 접근할 수 없지만 이 클래스를 상속한 자식 클래스에서만 접근이 가능한 상태
  class CoffeeMaker {
    private static BEANS_GRAMM_PER_SHOT: number = 7;
    private coffeeBeans: number = 0;

    // constructor를 private으로 만들어서 항상 static 메소드를 이용할 수 있도록 권장하는 것이 더 좋다.
    private constructor(coffeeBeans: number) {
      this.coffeeBeans = coffeeBeans;
    }

    // 보통 static 이라는 키워드를 붙여서 무언가 오브젝트를 만들 수 있는 함수를 제공한다면
    // 생성자를 이용해서 생성하는 것을 금지하기 위해서 쓴다.
    static makeMachine(coffeeBeans: number): CoffeeMaker {
      return new CoffeeMaker(coffeeBeans);
    }

    public fillCoffeeBeans(beans: number) {
      if (beans < 0) {
        throw new Error('value for beans should be greater than 0');
      }
      this.coffeeBeans += beans;
    }

    makeCoffee(shots: number): CoffeeCup {
      if (this.coffeeBeans < shots * CoffeeMaker.BEANS_GRAMM_PER_SHOT) {
        throw new Error('Not enough coffee beans!');
      }
      this.coffeeBeans -= shots * CoffeeMaker.BEANS_GRAMM_PER_SHOT;
      return {
        shots,
        hasMilk: false,
      };
    }
  }

  const maker = CoffeeMaker.makeMachine(32); // ✅ 이런식으로 static 함수를 이용해서 오브젝트를 만들 수 있다.
  // const maker = new CoffeeMaker(32);
  maker.fillCoffeeBeans(32);
  // maker.coffeeBeans = 3;
  // maker.coffeeBeans = -34; // invalid

  // 🔍 Getter, Setter
  // getter와 setter를 쓰면 조금 더 다양한 연산을 할 수가 있다.
  // 우리가 원하는 유효성 검사도 할 수가 있다.
  class User {
    // fullName에 접근할 때마다 새로운 데이터를 만들고 계산할 수 있게 된다.
    get fullName(): string {
      return `${this.firstName} ${this.lastName}`;
    }
    private internalAge = 4;
    get age(): number {
      return this.internalAge;
    }
    set age(num: number) {
      if (num < 0) {
        // 전달된 나이가 0보다 작다면 에러 메세지를 보여주는 유효성 검사도 해줄 수 있다.
      }
      this.internalAge = num;
    }
    constructor(private firstName: string, private lastName: string) {
      // this.fullName = `${firstName} ${lastName}`; // 한번 할당되면 계속 지정되어 있는 상태가 된다. ✅
    }
  }
  const user = new User('Sunmin', 'Lee');
  console.log(user.fullName); // Sunmin Lee
  user.age = 6;
  console.log(user.fullName); // getter 사용 전 -> Sunmin Lee ✅, getter 사용 후 -> Min Lee
}

// {
//   type CoffeeCup = {
//     shots: number;
//     hasMilk: boolean;
//   };

//   // public
//   // private
//   // protected
//   class CoffeeMaker {
//     private static BEANS_GRAMM_PER_SHOT: number = 7; // class level
//     private coffeeBeans: number = 0; // instance (object) level

//     private constructor(coffeeBeans: number) {
//       this.coffeeBeans = coffeeBeans;
//     }

//     static makeMachine(coffeeBeans: number): CoffeeMaker {
//       return new CoffeeMaker(coffeeBeans);
//     }

//     fillCoffeeBeans(beans: number) {
//       if (beans < 0) {
//         throw new Error('value for beans should be greater than 0');
//       }
//       this.coffeeBeans += beans;
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

//   const maker = CoffeeMaker.makeMachine(32);
//   maker.fillCoffeeBeans(32);

//   class User {
//     get fullName(): string {
//       return `${this.firstName} ${this.lastName}`;
//     }
//     private internalAge = 4;
//     get age(): number {
//       return this.internalAge;
//     }
//     set age(num: number) {
//       if (num < 0) {
//       }
//       this.internalAge = num;
//     }
//     constructor(private firstName: string, public lastName: string) {}
//   }
//   const user = new User('Steve', 'Jobs');
//   user.age = 6;
//   console.log(user.fullName);
// }
