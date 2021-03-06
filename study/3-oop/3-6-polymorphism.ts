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
      console.log('cleaning the machine...π§Ό');
    }

    private grindBeans(shots: number) {
      console.log(`grinding beans for ${shots}`);
      if (this.coffeeBeans < shots * CoffeeMachine.BEANS_GRAMM_PER_SHOT) {
        throw new Error('Not enough coffee beans!');
      }
      this.coffeeBeans -= shots * CoffeeMachine.BEANS_GRAMM_PER_SHOT;
    }

    private preheat(): void {
      console.log('heating up... π₯');
    }

    private extract(shots: number): CoffeeCup {
      console.log(`Pulling ${shots} shots... βοΈ`);
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
      console.log('Steaming some milk... π₯');
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
   * π Polymorphism λ€νμ±
   *
   * 1. λ€νμ±μ΄λ νλμ μΈν°νμ΄μ€λ λλ λΆλͺ¨μ ν΄λμ€λ₯Ό μμν μμ ν΄λμ€λ€μ΄ μΈν°νμ΄μ€μ
   *    λΆλͺ¨ν΄λμ€μ μλ ν¨μλ€μ λ€λ₯Έ λ°©μμΌλ‘ λ€μνκ² κ΅¬μ±ν¨μΌλ‘μ¨ μ‘°κΈ λ λ€μμ±μ λ§λ€μ΄ λ³Ό μ μλ€.
   *
   *    κ·Έλ¦¬κ³  μΈν°νμ΄μ€μ λΆλͺ¨ν΄λμ€μ μλ λμΌν ν¨μ apiλ₯Ό ν΅ν΄μ κ°κ°μ κ΅¬νλ μμν΄λμ€μ λ΄λΆ κ΅¬ν μ¬ν­μ
   *    μ κ²½ μ°μ§ μκ³  μ½μλ ν κ°μ§μ apiλ₯Ό νΈμΆν¨μΌλ‘μ¨ μ¬μ©νλ μ¬λλ κ°νΈνκ² λ€μν κΈ°λ₯λ€μ νμ©ν  μ μκ² λμμ€λ€.
   *
   * 2. λ€νμ±μ μ΄μ©νλ©΄ ν κ°μ§μ ν΄λμ€λ λλ ν κ°μ§μ μΈν°νμ΄μ€λ₯Ό ν΅ν΄μ λ€λ₯Έ λ°©μμΌλ‘ κ΅¬νν ν΄λμ€λ₯Ό λ§λ€ μ μλ€.
   *
   * λ€νμ±μ μ₯μ 
   * - λ΄λΆμ μΌλ‘ κ΅¬νλ λ€μν ν΄λμ€λ€μ΄ ν κ°μ§μ μΈν°νμ΄μ€λ₯Ό κ΅¬ννκ±°λ λλ λμΌν λΆλͺ¨ν΄λμ€λ₯Ό μμνμ λ
   * λμΌν ν¨μλ₯Ό μ΄λ€ ν΄λμ€μΈμ§ κ΅¬λΆνμ§ μκ³  κ³΅ν΅λ apiλ₯Ό νΈμΆν  μ μλ€λ κ²μ΄ ν° μ₯μ μ΄λ€.
   */

  // μ»€νΌμ»΅μ μ€νμ μΆκ°ν΄μ£Όλ ν΄λμ€
  class SweetCoffeeMaker extends CoffeeMachine {
    // λΆλͺ¨ν΄λμ€μ μλ makeCoffee ν¨μ overwriting, λμΌν μΈν°νμ΄μ€λ₯Ό μ μ§νκ³  μ»€νΌμ»΅μ λ¦¬ν΄ ν΄μ€μΌ νλ€.
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
  // λ€νμ±μ μ₯μ  β
  machines.forEach((machine) => {
    console.log('-------------------------');
    machine.makeCoffee(1);
  });
}
