// 🔍 제네릭 조건
interface Employee {
  pay(): void;
}

class FullTimeEmployee implements Employee {
  pay() {
    console.log('full time!');
  }
  workFullTime() {}
}

class PartTimeEmployee implements Employee {
  pay() {
    console.log('part time!');
  }
  workPartTime() {}
}

// 세부적인 타입을 인자로 받아서 정말 추상적인 타입으로 다시 리턴하는 함수는 안좋다. 💩💩💩
function payBad(employee: Employee): Employee {
  employee.pay();
  return employee;
}

// constraints 제네릭에 조건을 달 수가 있다.
// 일반 타입이지만 아무 타입이나 다 되는 건 아니고 Employee를 구현한 것만 가능하다.
function pay<T extends Employee>(employee: T): T {
  employee.pay();
  return employee;
}

const sun = new FullTimeEmployee();
const min = new PartTimeEmployee();
sun.workFullTime();
min.workPartTime();

// ✅ 제네릭도 조건들을 걸어둠으로써 조금 더 제한적인 범위 내에서 일반화된 제네릭을 이용할 수가 있다.
const sunAfterPay = pay(sun);
// const minAfterPay = pay(123); // error

console.clear();

// keyof -> 그 오브젝트 안에 들어 있는 키의 타입을 말한다.
function getValue<T, K extends keyof T>(obj: T, key: K): T[K] {
  return obj[key];
}

const obj = {
  name: 'sunmin',
  age: '20',
};

const obj2 = {
  animal: '🦒',
};

// 항상 두 번째에 전달되는 것은 이 오브젝트에 포함되어 있는 키 중에 하나여야 한다.
// console.log(getValue(obj, 'score')); // error
console.log(getValue(obj, 'name')); // sunmin
console.log(getValue(obj, 'age')); // 20

console.log(getValue(obj2, 'animal')); // 🦒
// console.log(getValue(obj2, 'name')); // error

// ✅ 조건부를 사용하면 조금 더 세밀하게 타입을 제한해서 정의 할 수가 있다.
