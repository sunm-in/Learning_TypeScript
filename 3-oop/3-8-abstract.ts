{
  type CoffeeCup = {
    shots: number;
    hasMilk?: boolean;
    hasSugar?: boolean;
  };

  interface CoffeeMaker {
    makeCoffee(shots: number): CoffeeCup;
  }

  // 추상적인 클래스 -> abstract(추상적인) 키워드를 붙이게 되면 커피머신 이 자체로는 오브젝트를 만들 수 없다.
  /**
   * 공통적인 기능들이 있다면 그런 기능들을 다 구현할 수 있고 이걸 구현하는 클래스마다 달라져야 하는 내용이 있다면
   * 그 부분만 abstract 메소드로 정의를 할 수가 있다.
   *
   * 인터페이스에서 함수의 규격을 정의한 것처럼 abstract 메소드에서는
   * 함수 이름은 뭔지, 어떤 인자를 받아서 어떤 걸 리턴 하는지만 정의를 할 수가 있다.
   * 공통적으로 쓰이는 기능 등은 내부에서만 필요한 것은 private으로 외부에서 호출할 수 있는 것은 public으로 만들 수 있다.
   *
   * ✅ abstract 클래스를 이용하면 조금 더 안전하게 우리가 의도한대로 공통적인 기능들을 수행하고
   * 달라져야 되는 것만 상속하는 클래스에게 구현하도록 강조할 수가 있다.
   *
   * 가능하면 너무 수직적으로 굉장히 깊은 상속을 이용하기보다는 컴포지션을 이용하는 것이 더 좋다.
   * 그렇다고 상속을 쓰는 것이 무조건 나쁜 것은 아님.
   */
  abstract class CoffeeMachine implements CoffeeMaker {
    private static BEANS_GRAMM_PER_SHOT: number = 7; // class level
    private coffeeBeans: number = 0; // instance (object) level

    constructor(coffeeBeans: number) {
      this.coffeeBeans = coffeeBeans;
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

    // ✅ (1) 구현하는 클래스마다 달라져야 하는 이 abstract 함수만
    protected abstract extract(shots: number): CoffeeCup;

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

    // ✅ (2) 이렇게 구현을 해주면 된다.
    protected extract(shots: number): CoffeeCup {
      this.steamMilk();
      return {
        shots,
        hasMilk: true,
      };
    }
  }

  class SweetCoffeeMaker extends CoffeeMachine {
    protected extract(shots: number): CoffeeCup {
      return {
        shots,
        hasSugar: true,
      };
    }
  }

  const machines: CoffeeMaker[] = [
    new CaffeLatteMachine(16, '1'),
    new SweetCoffeeMaker(16),
    new CaffeLatteMachine(16, '1'),
    new SweetCoffeeMaker(16),
  ];
  machines.forEach((machine) => {
    console.log('-------------------------');
    machine.makeCoffee(1);
  });
}
