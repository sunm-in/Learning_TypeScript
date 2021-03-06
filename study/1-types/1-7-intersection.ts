{
  /**
   * π Intersection Types: &
   */
  // Union Typeκ³Ό μμ ν λ°λλλ νμ
  // -> Union Typeμ λ°μν  μ μλ λͺ¨λ  μΌμ΄μ€μ€ νκ°μ§λ§ μ ν
  // -> Intersection Typeμ λͺ¨λ  μΌμ΄μ€λ₯Ό ν©ν νμ
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

  // Intersection Typeμ μ΄μ©νλ©΄ λ€μν νμλ€μ νλλ‘ λ¬Άμ΄μ μ μΈν  μ μλ€.
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
