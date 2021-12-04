{
  /**
   * 🔍 Intersection Types: &
   */
  // Union Type과 완전히 반대되는 타입
  // -> Union Type은 발생할 수 있는 모든 케이스중 한가지만 선택
  // -> Intersection Type은 모든 케이스를 합한 타입
  type Student = {
    name: string;
    score: number;
  };

  type Worker = {
    employeeId: number;
    work: () => void;
  };

  function internWork(person: Student & Worker) {
    console.log(person.name, person.employeeId, person.work());
  }

  // Intersection Type을 이용하면 다양한 타입들은 하나로 묶어서 선언할 수 있다.
  internWork({
    name: 'sunmin',
    score: 1,
    employeeId: 123,
    work: () => {},
  });
}

// {
//   /**
//    * Intersection Types: &
//    */
//   type Student = {
//     name: string;
//     score: number;
//   };

//   type Worker = {
//     empolyeeId: number;
//     work: () => void;
//   };

//   function internWork(person: Student & Worker) {
//     console.log(person.name, person.empolyeeId, person.work());
//   }

//   internWork({
//     name: 'ellie',
//     score: 1,
//     empolyeeId: 123,
//     work: () => {},
//   });
// }
