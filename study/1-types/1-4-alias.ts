{
  // Type Alias를 이용하게 되면 기본적인 타입 정의부터 시작해서 굉장히 복잡하고 재밌는 타입들을 정의 할 수 있다.
  /**
   * 🔍Type Aliases
   */
  type Text = string;
  const name: Text = 'sunmin';
  const address: Text = 'korea';
  type Num = number;
  type Student = {
    name: string;
    age: number;
  };
  const student: Student = {
    name: 'sunmin',
    age: 20,
  };
  // 직접 원하는 타입을 정의한 것 -> Type Alias

  /**
   * 🔍String Literal Types
   */
  type Name = 'name';
  let minName: Name;
  minName = 'name';
  type JSON = 'json';
  const json: JSON = 'json';

  type Boal = true;
  // const isCat: Boal = false; // 에러 발생
}

// {
//   /**
//    * Type Aliases
//    */
//   type Text = string;
//   const name: Text = 'ellie';
//   const address: Text = 'korea';
//   type Num = number;
//   type Student = {
//     name: string;
//     age: number;
//   };
//   const student: Student = {
//     name: 'ellie',
//     age: 12,
//   };

//   /**
//    * String Literal Types
//    */
//   type Name = 'name';
//   let ellieName: Name;
//   ellieName = 'name';
//   type JSON = 'json';
//   const json: JSON = 'json';

//   type Boal = true;
// }
