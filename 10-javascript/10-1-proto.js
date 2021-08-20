/**
 * 🔍 프로토타입
 * 자바스크립트에서 객체지향 프로그래밍 상속을 하기 위해서 쓰인다.
 * 그리고 코드를 재사용하기 위해서 만들어진 것.
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
    console.log('making... ☕️');
  }; */
}
// Prototype member lever
CoffeeMachine.prototype.makeCoffee = (shots) => {
  console.log('making... ☕️');
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
