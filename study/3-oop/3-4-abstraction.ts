{
  type CoffeeCup = {
    shots: number;
    hasMilk: boolean;
  };

  interface CoffeeMaker {
    makeCoffee(shots: number): CoffeeCup;
  }

  interface CommercialCoffeeMaker {
    makeCoffee(shots: number): CoffeeCup;
    fillCoffeeBeans(beans: number): void;
    clean(): void;
  }

  // 인터페이스를 implement 구현하는 클래스에서는 인터페이스에 적혀있는 모든 함수를 구현해줘야 한다. -> makeCoffe 함수를 구현해야함
  class CoffeeMachine implements CoffeeMaker, CommercialCoffeeMaker {
    private static BEANS_GRAMM_PER_SHOT: number = 7; // class level
    private coffeeBeans: number = 0; // instance (object) level

    private constructor(coffeeBeans: number) {
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

    /**
     * grindBeans(), preheat(), extract()
     * Abstraction 추상화는 인터페이스를 굉장히 간단하고 심플하게 만듬으로써
     * 사용하는 사람이 간편하게 많은 생각을 하지 않고도 심플하게 사용할 수 있도록 도와준다.
     *
     * Abstraction을 할 수 있는 방법
     * - 접근제어자를 통해서 인캡슐레이션을 통해서 추상화를 할 수 있다.
     * - 인터페이스를 통해서 추상화를 할 수 있다. -> 인터페이스가 없는 프로그래밍 언어도 있기 때문에 보통 정보 은닉을 통해서도 가능하다.(private)
     *
     * 추상화 해놓은 클래스는 사용자(내가 만든 클래스를 이용하는 사람, 내가 만든 클래스를 내가 사용할 수도 있고 다른 팀원이 이용할 수도 있다.)가 사용하기에
     * 굉장히 좋고 간단하게 정말 필요한 함수만 노출해서 양식을 조금 더 간단하고 심플하게 만드는 것을 추상화라고 한다.
     */

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

  class AmateurUser {
    constructor(private machine: CoffeeMaker) {}
    makeCoffee() {
      const coffee = this.machine.makeCoffee(2);
      console.log(coffee);
    }
  }

  class ProBarista {
    constructor(private machine: CommercialCoffeeMaker) {}
    makeCoffee() {
      const coffee = this.machine.makeCoffee(2);
      console.log(coffee);
      this.machine.fillCoffeeBeans(45);
      this.machine.clean();
    }
  }

  /**
   * 동일한 오브젝트의 인스턴스일지라도 이 오브젝트는 두 가지의 인터페이스를 구현하기 때문에
   * 아마추어 유저와 프로 바리스타는 커피 머신을 받아 오는 것이 아니라
   * CoffeeMaker를 생성자에서 받아오고 CommercialCoffeeMaker라는 인터페이스를 생성자에서 받아오기 때문에
   * 이 인터페이스에서 규약된 클래스 보다는 조금 더 좁은 범위에 인터페이스에 규약된 함수들만 접근이 가능한 걸 볼 수 있다.
   *
   * 그래서 이 클래스를 사용하는 사용자들은 이 클래스의 다른 복잡한 기능을 알 필요도 없고
   * 인터페이스만 어떻게 사용하면 되는지 알면 된다.
   */
  const maker: CoffeeMachine = CoffeeMachine.makeMachine(32);
  const amateur = new AmateurUser(maker);
  const pro = new ProBarista(maker);
  pro.makeCoffee();
}
