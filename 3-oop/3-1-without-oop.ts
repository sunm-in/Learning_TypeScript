{
  // 절차지향적으로 커피기계 만들기
  type CoffeeCup = {
    shots: number;
    hasMilk: boolean;
  };

  const BEANS_GRAMM_PER_SHOT: number = 7;

  let coffeeBeans: number = 0;
  function makeCoffee(shots: number): CoffeeCup {
    if (coffeeBeans < shots * BEANS_GRAMM_PER_SHOT) {
      throw new Error('Not enough coffee beans!');
    }
    coffeeBeans -= shots * BEANS_GRAMM_PER_SHOT;
    return {
      // key와 value의 이름이 같다면 생략 가능
      // shots: shots,
      shots,
      hasMilk: false,
    };
  }

  coffeeBeans += 3 * BEANS_GRAMM_PER_SHOT;
  const coffee = makeCoffee(2);
  console.log(coffee);
}

// {
//   type CoffeeCup = {
//     shots: number;
//     hasMilk: boolean;
//   };

//   const BEANS_GRAMM_PER_SHOT: number = 7;

//   let coffeeBeans: number = 0;
//   function makeCoffee(shots: number): CoffeeCup {
//     if (coffeeBeans < shots * BEANS_GRAMM_PER_SHOT) {
//       throw new Error('Not enough coffee beans!');
//     }
//     coffeeBeans -= shots * BEANS_GRAMM_PER_SHOT;
//     return {
//       shots,
//       hasMilk: false,
//     };
//   }

//   coffeeBeans += 3 * BEANS_GRAMM_PER_SHOT;
//   const coffee = makeCoffee(2);
//   console.log(coffee);
// }
