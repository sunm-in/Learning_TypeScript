/**
 * 상속을 잘 이용하면 공통적인 기능은 그대로 재사용을 하면서
 * 자식 클래스에서만 조금 더 자식 클래스의 특화된 기능들을 할 수 있고 추가할 수도 있다.
 * super 라는 키워드를 이용해서 부모 클래스에 있는 함수들을 호출하거나 접근할 수 도 있다.
 *
 * 만약 자식 클래스에서 또 다른 데이터를 생성자에서 받아올 수 있다면
 * 예를 들어서 기계의 시리얼 넘버를 받아올 수 있다면 -> constructor(seriaNumber: string) {}
 * 이렇게 자식에서 constructor를 따로 구현하는 경우 꼭 super를 호출해야 된다.
 * constructor(seriaNumber: string) {
 *  super()
 * }
 *
 * 추가적으로 어떤 데이터를 받아 올 때는 공통적으로 부모 클래스에서 필요한 데이터도 받아오고
 * 이 받아온 데이터를 super를 이용해서 전달을 해줘야 한다.
 *
 */

{
  type CoffeeCup = {
    shots: number;
    hasMilk: boolean;
  };

  interface CoffeeMaker {
    makeCoffee(shots: number): CoffeeCup;
  }

  // 인터페이스를 구현할 땐 implements라는 키워드를 사용
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

  // 다른 클래스를 상속할 때는 extends라는 키워드를 사용
  class CaffeLatteMachine extends CoffeeMachine {
    // seriaNumber 앞에 public readonly(한번 설정되면 바뀌지 않는다면)를 사용하면 라떼 머신에서만 시리얼 넘버에 접근 할 수가 있다.
    constructor(beans: number, public readonly serialNumber: string) {
      // 추가적으로 어떤 데이터를 받아 올 때는 공통적으로 부모 클래스에서 필요한 데이터도 받아오고
      // 이 받아온 데이터를 super를 이용해서 전달을 해줘야 한다.
      super(beans);
    }
    private steamMilk(): void {
      console.log('Steaming some milk... 🥛');
    }
    // 자식 클래스에서 부모클래스에 있는 함수를 덮어 씌울 수 있다. -> overwriting
    makeCoffee(shots: number): CoffeeCup {
      // 자식에서 부모에 있는 함수를 이용하고 싶을 때 -> super 를 이용하면 상속하는 부모에 있는 함수를 호출할 수 있다.
      const coffee = super.makeCoffee(shots);
      this.steamMilk();
      return {
        ...coffee,
        hasMilk: true,
      };
    }
  }

  const machine = new CoffeeMachine(23);
  const latteMachine = new CaffeLatteMachine(23, 'SSSS');
  const coffee = latteMachine.makeCoffee(1);
  console.log(coffee);
  console.log(latteMachine.serialNumber);
}
