{
  /**
   * π μμμ λ¬Έμ μ 
   * μμμ κΉμ΄κ° μ μ  κΈΈμ΄μ§λ©΄ κΈΈμ΄μ§μλ‘ μλ‘ κ°μ κ΄κ³κ° μ‘°κΈμ© λ³΅μ‘ν΄μ§ μ μλ€.
   * λ§μ½ μ΄λ€ λΆλͺ¨ν΄λμ€μ νλμ μμ νκ² λλ©΄ μ΄ μμ λ μ¬ν­ λλ¬Έμ μ΄κ²μ μμνλ λͺ¨λ  μμ ν΄λμ€μ μν₯μ λ―ΈμΉ  μκ° μλ
   * μΉλͺμ μΈ λ¨μ μ΄ μλ€. κ·Έλ¦¬κ³  μλ‘μ΄ κΈ°λ₯μ λμνλ €κ³  ν  λ μ΄λ»κ² μμμ κ΅¬μ‘°λ₯Ό κ°μ ΈμμΌ νλμ§ λ³΅μ‘ν΄μ§λ€.
   *
   * κ·Έλ¦¬κ³  μ μΌ ν° λ¬Έμ μ μ νμμ€ν¬λ¦½νΈμμλ ν κ°μ§ μ΄μμ λΆλͺ¨ν΄λμ€λ₯Ό μμν  μκ° μλ€. (ν΄λμ€λ μ€μ§ νλμ ν΄λμ€λ§ μμ ν  μ μλ€.)
   * μ΄λ¬ν λ¨μ λ€ λλ¬Έμ Composition(κ΅¬μ±)μ μ¬μ©νλ κ²μ΄ λ μ’λ€.
   */

  /**
   * μ»΄ν¬μ§μμ ν΅ν΄μ μμμ μ ν μ¬μ©νμ§ μκ³ λ μ»€νΌλ¨Έμ μ΄λΌλ ν΄λμ€μ μ°λ¦¬κ° νμν λ€μν ννμ μ°μ μ μ€νμ μ£Όμν¨μΌλ‘μ¨
   * μ°λ¦¬κ° μνλ λ€μν ννμ μ€λΈμ νΈλ€μ λ§λ€ μκ° μλ€.
   */
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

    constructor(
      coffeeBeans: number,
      private milk: MilkFrother,
      private sugar: SugarProvider
    ) {
      this.coffeeBeans = coffeeBeans;
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
      const coffee = this.extract(shots);
      const sugarAdded = this.sugar.addSugar(coffee);
      return this.milk.makeMilk(sugarAdded);
    }
  }

  interface MilkFrother {
    makeMilk(cup: CoffeeCup): CoffeeCup;
  }

  interface SugarProvider {
    addSugar(cup: CoffeeCup): CoffeeCup;
  }

  // μΈκ΅¬λ € μ°μ  κ±°νκΈ°
  class CheapMilkSteamer implements MilkFrother {
    private steamMilk(): void {
      console.log(`Steaming some milkπ₯...`);
    }
    makeMilk(cup: CoffeeCup): CoffeeCup {
      this.steamMilk();
      return {
        ...cup,
        hasMilk: true,
      };
    }
  }

  class FancyMilkSteamer implements MilkFrother {
    private steamMilk(): void {
      console.log(`Fancy!! Steaming some milkπ₯...`);
    }
    makeMilk(cup: CoffeeCup): CoffeeCup {
      this.steamMilk();
      return {
        ...cup,
        hasMilk: true,
      };
    }
  }

  class ColdMilkSteamer implements MilkFrother {
    private steamMilk(): void {
      console.log('Fancy Steaming some milk...π₯');
    }
    makeMilk(cup: CoffeeCup): CoffeeCup {
      this.steamMilk();
      return {
        ...cup,
        hasMilk: true,
      };
    }
  }

  class NoMilk implements MilkFrother {
    makeMilk(cup: CoffeeCup): CoffeeCup {
      return cup;
    }
  }

  // μ€ν μ μ‘°κΈ°
  class CandySugarMixer implements SugarProvider {
    private getSuger() {
      console.log('Getting some sugar from candy π­');
      return true;
    }
    addSugar(cuppa: CoffeeCup): CoffeeCup {
      const sugar = this.getSuger();
      return {
        ...cuppa,
        hasSugar: true,
      };
    }
  }

  class SugarMixer implements SugarProvider {
    private getSuger() {
      console.log('Getting some sugar from jar π¬');
      return true;
    }

    addSugar(cup: CoffeeCup): CoffeeCup {
      const sugar = this.getSuger();
      return {
        ...cup,
        hasSugar: sugar,
      };
    }
  }

  class NoSugar implements SugarProvider {
    addSugar(cup: CoffeeCup): CoffeeCup {
      return cup;
    }
  }

  // Milk
  const CheapMilkMaker = new CheapMilkSteamer();
  const fancyMilkMaker = new FancyMilkSteamer();
  const coldMilkMaker = new ColdMilkSteamer();
  const noMilk = new NoMilk();
  // Sugar
  const candySuger = new CandySugarMixer();
  const sugar = new SugarMixer();
  const noSugar = new NoSugar();

  //
  const sweetCandyMachine = new CoffeeMachine(12, noMilk, candySuger);
  const sweetMachine = new CoffeeMachine(12, noMilk, sugar);
  const latteMachine = new CoffeeMachine(12, CheapMilkMaker, noSugar);
  const coldLatteMachine = new CoffeeMachine(12, coldMilkMaker, sugar);
  const sweetLatteMachine = new CoffeeMachine(12, CheapMilkMaker, candySuger);
}
