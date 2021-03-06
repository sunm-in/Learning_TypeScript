// π μ λ€λ¦­ μ‘°κ±΄
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

// μΈλΆμ μΈ νμμ μΈμλ‘ λ°μμ μ λ§ μΆμμ μΈ νμμΌλ‘ λ€μ λ¦¬ν΄νλ ν¨μλ μμ’λ€. π©π©π©
function payBad(employee: Employee): Employee {
  employee.pay();
  return employee;
}

// constraints μ λ€λ¦­μ μ‘°κ±΄μ λ¬ μκ° μλ€.
// μΌλ° νμμ΄μ§λ§ μλ¬΄ νμμ΄λ λ€ λλ κ±΄ μλκ³  Employeeλ₯Ό κ΅¬νν κ²λ§ κ°λ₯νλ€.
function pay<T extends Employee>(employee: T): T {
  employee.pay();
  return employee;
}

const sun = new FullTimeEmployee();
const min = new PartTimeEmployee();
sun.workFullTime();
min.workPartTime();

// β μ λ€λ¦­λ μ‘°κ±΄λ€μ κ±Έμ΄λ μΌλ‘μ¨ μ‘°κΈ λ μ νμ μΈ λ²μ λ΄μμ μΌλ°νλ μ λ€λ¦­μ μ΄μ©ν  μκ° μλ€.
const sunAfterPay = pay(sun);
// const minAfterPay = pay(123); // error

console.clear();

// keyof -> κ·Έ μ€λΈμ νΈ μμ λ€μ΄ μλ ν€μ νμμ λ§νλ€.
function getValue<T, K extends keyof T>(obj: T, key: K): T[K] {
  return obj[key];
}

const obj = {
  name: 'sunmin',
  age: '20',
};

const obj2 = {
  animal: 'π¦',
};

// ν­μ λ λ²μ§Έμ μ λ¬λλ κ²μ μ΄ μ€λΈμ νΈμ ν¬ν¨λμ΄ μλ ν€ μ€μ νλμ¬μΌ νλ€.
// console.log(getValue(obj, 'score')); // error
console.log(getValue(obj, 'name')); // sunmin
console.log(getValue(obj, 'age')); // 20

console.log(getValue(obj2, 'animal')); // π¦
// console.log(getValue(obj2, 'name')); // error

// β μ‘°κ±΄λΆλ₯Ό μ¬μ©νλ©΄ μ‘°κΈ λ μΈλ°νκ² νμμ μ νν΄μ μ μ ν  μκ° μλ€.
