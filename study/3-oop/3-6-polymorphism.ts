{
  type CoffeeCup = {
    shots: number;
    hasMilk?: boolean;
    hasSugar?: boolean;
  };

  interface CoffeeMaker {
    makeCoffee(shots: number): CoffeeCup;
  }

  class CoffeeMachine implements CoffeeMaker {
    private static BEANS_GRAMM_PER_SHOT: number = 7; // class level
    private coffeeBeans: number = 0; // instance (object) level

    constructor(coffeeBeans: number) {
      this.coffeeBeans = coffeeBeans;
    }

    static makeMachine(coffeeBeans: number): CoffeeMachine {
      return new CoffeeMachine(coffeeBeans);
    }

    fillCoffeeBeans(beans: number) {
      if (beans < 0) {
        throw new Error('value for beans should be greater than 0');
      }
      this.coffeeBeans += beans;
    }

    clean() {
      console.log('cleaning the machine...🧼');
    }

    private grindBeans(shots: number) {
      console.log(`grinding beans for ${shots}`);
      if (this.coffeeBeans < shots * CoffeeMachine.BEANS_GRAMM_PER_SHOT) {
        throw new Error('Not enough coffee beans!');
      }
      this.coffeeBeans -= shots * CoffeeMachine.BEANS_GRAMM_PER_SHOT;
    }

    private preheat(): void {
      console.log('heating up... 🔥');
    }

    private extract(shots: number): CoffeeCup {
      console.log(`Pulling ${shots} shots... ☕️`);
      return {
        shots,
        hasMilk: false,
      };
    }

    makeCoffee(shots: number): CoffeeCup {
      this.grindBeans(shots);
      this.preheat();
      return this.extract(shots);
    }
  }

  class CaffeLatteMachine extends CoffeeMachine {
    constructor(beans: number, public readonly serialNumber: string) {
      super(beans);
    }
    private steamMilk(): void {
      console.log('Steaming some milk... 🥛');
    }
    makeCoffee(shots: number): CoffeeCup {
      const coffee = super.makeCoffee(shots);
      this.steamMilk();
      return {
        ...coffee,
        hasMilk: true,
      };
    }
  }

  /**
   * 🔍 Polymorphism 다형성
   *
   * 1. 다형성이란 하나의 인터페이스나 또는 부모의 클래스를 상속한 자식 클래스들이 인터페이스와
   *    부모클래스에 있는 함수들을 다른 방식으로 다양하게 구성함으로써 조금 더 다양성을 만들어 볼 수 있다.
   *
   *    그리고 인터페이스와 부모클래스에 있는 동일한 함수 api를 통해서 각각의 구현된 자식클래스의 내부 구현 사항을
   *    신경 쓰지 않고 약속된 한 가지의 api를 호출함으로써 사용하는 사람도 간편하게 다양한 기능들을 활용할 수 있게 도와준다.
   *
   * 2. 다형성을 이용하면 한 가지의 클래스나 또는 한 가지의 인터페이스를 통해서 다른 방식으로 구현한 클래스를 만들 수 있다.
   *
   * 다형성의 장점
   * - 내부적으로 구현된 다양한 클래스들이 한 가지의 인터페이스를 구현하거나 또는 동일한 부모클래스를 상속했을 때
   * 동일한 함수를 어떤 클래스인지 구분하지 않고 공통된 api를 호출할 수 있다는 것이 큰 장점이다.
   */

  // 커피컵에 설탕을 추가해주는 클래스
  class SweetCoffeeMaker extends CoffeeMachine {
    // 부모클래스에 있는 makeCoffee 함수 overwriting, 동일한 인터페이스를 유지하고 커피컵을 리턴 해줘야 한다.
    makeCoffee(shots: number): CoffeeCup {
      const coffee = super.makeCoffee(shots);
      return {
        ...coffee,
        hasSugar: true,
      };
    }
  }

  const machines: CoffeeMaker[] = [
    new CoffeeMachine(16),
    new CaffeLatteMachine(16, '1'),
    new SweetCoffeeMaker(16),
    new CoffeeMachine(16),
    new CaffeLatteMachine(16, '1'),
    new SweetCoffeeMaker(16),
  ];
  // 다형성의 장점 ✅
  machines.forEach((machine) => {
    console.log('-------------------------');
    machine.makeCoffee(1);
  });
}
