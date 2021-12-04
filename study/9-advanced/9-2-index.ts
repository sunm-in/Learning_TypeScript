{
  const obj = {
    name: 'sunmin',
  };
  obj.name; // sunmin
  obj['name']; // sunmin

  type Animal = {
    name: string;
    age: number;
    gender: 'male' | 'female';
  };

  type Name = Animal['name']; // Name의 타입은 string 타입이 된다.
  const text: Name = 'hello'; // text Name 타입을 이용하는 변수에는 이제 문자열만 할당 가능하다. 숫자나 다른 타입을 할당하면 에러가 발생한다.

  type Gender = Animal['gender']; // 'male' | 'female'

  type Keys = keyof Animal; // 'name' | 'age' | 'gender'
  const key: Keys = 'age'; // name, age, gender 세 가지만 할당 가능하다.

  type Person = {
    name: string;
    gender: Animal['gender'];
  };
  const person: Person = {
    // person에 Person 타입을 가지게 되면 모두 적어줘야 한다.
    name: 'sunmin',
    gender: 'male', // Animal['gender'] 타입을 받으면 할당할 때 힌트도 male, female만 보여준다.
  };

  // ✅ 인덱스 타입을 이용하면 다른 타입에 있는 키에 접근해서 그 키의 value의 타입을 그대로 다시 선언할 수 있다.
}
