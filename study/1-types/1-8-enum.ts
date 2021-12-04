{
  /**
   * Enum
   * 여러가지 상수 값들을 한 곳에 모아서 정의할 수 있게 도와주는 타입
   * JavaScript에는 enum타입이 존재하지 않기 때문에 타입스크립트에서 자체적으로 제공하는 타입 중에 하나
   */
  // JavaScript
  const MAX_NUM = 6;
  const MAX_STUDENTS_PER_CLASS = 10;
  const MONDAY = 0;
  const TUESDAY = 1;
  const WEDNESDAY = 2;
  const DAYS_ENUM = Object.freeze({ MONDAY: 0, TUESDAY: 1, WEDNESDAY: 2 });
  const dayOfToday = DAYS_ENUM.MONDAY;

  // TypeScript
  type DaysOfWeek = 'Monday' | 'Tuesday' | 'Wednesday'; // ⭐️Union type⭐️
  enum Days {
    // 값을 지정해줄 수 있다.
    // 문자열은 그 다음에 어떤 걸 할당해야 하는지 자동으로 알기가 어렵기 때문에 수동적으로 하나 하나씩 할당 해줘야 한다.
    // Monday = 1,
    Monday = 'monday',
    Tuesday = 'tues',
    Wednesday = 'wednes',
    Thursday = 'thurs',
    Friday = 'fri',
    Saturday = 'satur',
    Sunday = 'sun',
  }
  console.log(Days.Tuesday);
  const day = Days.Monday; // 0 -> 값을 지정하지 않으면 자동으로 0부터 하나씩 증가해서 자동으로 계산이 되어진다.
  console.log(day);
  // ✨타입스크립트에서 enum은 가능한 한 쓰지 않는 것이 좋다. -> enum으로 선언된 타입에 다른 숫자도 할당할 수 있기 때문에✨

  // ⭐️Union type⭐️
  let dayOfweek: DaysOfWeek = 'Monday';
  dayOfweek = 'Tuesday';
}

// {
//   /**
//    * Enum
//    */
//   // JavaScript
//   const MAX_NUM = 6;
//   const MAX_STUDENTS_PER_CLASS = 10;
//   const MONDAY = 0;
//   const TUESDAY = 1;
//   const WEDNESDAY = 2;
//   const DAYS_ENUM = Object.freeze({ MONDAY: 0, TUESDAY: 1, WEDNESDAY: 2 });
//   const dayOfToday = DAYS_ENUM.MONDAY;

//   // TypeScript
//   type DaysOfWeek = 'Monday' | 'Tuesday' | 'Wednesday';
//   enum Days {
//     Monday,
//     Tuesday,
//     Wednesday,
//     Thursday,
//     Friday,
//     Saturday,
//     Sunday,
//   }
//   console.log(Days.Monday);
//   let day: Days = Days.Saturday;
//   day = Days.Tuesday;
//   day = 10;
//   console.log(day);

//   let dayOfweek: DaysOfWeek = 'Monday';
//   dayOfweek = 'Wednesday';
// }
