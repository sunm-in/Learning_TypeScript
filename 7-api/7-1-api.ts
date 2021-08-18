Array;
[1, 2].map;

// 동일한 이름의 두가지 다른 타입의 인자를 받는 함수를 오버로딩 함수, 오버로딩이라고 한다.
// 🔍 every()
type Student = {
  passed: boolean;
};
const students: Student[] = [
  // 이 중에 하나라도 false 값이 있으면 every는 false가 되고 다 true일 경우에만 true가 된다.
  { passed: true },
  { passed: true },
  { passed: true },
];
const result = students.every((student) => {
  return student.passed;
});
console.log(result);

// console.clear();

class Animal {}
class Cat extends Animal {
  isCat: boolean = true;
}
class Dog extends Animal {
  isDog: boolean = false;
}
const animals: Animal[] = [new Cat(), new Cat(), new Dog()];
// Cat인지 Dog인지 확인하기
function isCat(animal: Animal): animal is Cat {
  return (animal as Cat).isCat !== undefined;
}
console.log(animals.every<Cat>(isCat));
