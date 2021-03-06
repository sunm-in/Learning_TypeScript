/**
 * π νλ‘ν νμ
 * μλ°μ€ν¬λ¦½νΈμμ κ°μ²΄μ§ν₯ νλ‘κ·Έλλ° μμμ νκΈ° μν΄μ μ°μΈλ€.
 * κ·Έλ¦¬κ³  μ½λλ₯Ό μ¬μ¬μ©νκΈ° μν΄μ λ§λ€μ΄μ§ κ².
 */

const x = {};
const y = {};
console.log(x);
console.log(y);
console.log(x.toString());
console.log(x.__proto__ === y.__proto__);

const array = [];
console.log(array);

console.clear();

function CoffeeMachine(beans) {
  this.beans = beans;
  // Instance member level
  /* this.makeCoffee = (shots) => {
    console.log('making... βοΈ');
  }; */
}
// Prototype member lever
CoffeeMachine.prototype.makeCoffee = (shots) => {
  console.log('making... βοΈ');
};
const machine1 = new CoffeeMachine(10);
const machine2 = new CoffeeMachine(20);
console.log(machine1);
console.log(machine2);

function LatteMachine(milk) {
  this.milk = milk;
}
LatteMachine.prototype = Object.create(CoffeeMachine.prototype);

const latteMachine = new LatteMachine(123);
console.log(latteMachine);
latteMachine.makeCoffee();
