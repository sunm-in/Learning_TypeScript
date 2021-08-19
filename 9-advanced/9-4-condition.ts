// 🔍 Conditional Type
// 조건이 맞으면 어떤 타입을 선택한다.
type Check<T> = T extends string ? boolean : number;
type Type = Check<string>; // boolean

// 타입스크립트 공식 사이트 예제
type TypeName<T> = T extends string
  ? 'string'
  : T extends number
  ? 'number'
  : T extends boolean
  ? 'boolean'
  : T extends undefined
  ? 'undefined'
  : T extends Function
  ? 'function'
  : 'object';

type T0 = TypeName<string>; // string
type T1 = TypeName<'a'>; // string
type T2 = TypeName<() => void>; // function
