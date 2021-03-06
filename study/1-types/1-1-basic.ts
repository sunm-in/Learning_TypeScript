{
  // JavaScript
  // old: var π© μ λ μ¬μ©x
  // var age = 5;
  // age = 1;

  // let ES6
  let name = 'hello';
  name = 'hi';

  // const
  const age = 5;
  // age = 5; μλ¬
}

{
  /**
   * JavaScript
   * νκ°μ§μ μ¬νν λ°μ΄ν°λ₯Ό λ΄μ μ μλ μμνμ Primitive: number, string, boolean, bigint, symbol, null, undefined
   * μ’ λ λ³΅μ‘ν λ°μ΄ν°λ₯Ό λ΄μ μ μλ νμ Object: function, array.....
   */

  // number
  const num: number = -6;

  // string
  const str: string = 'hello';

  // boolean
  const boal: boolean = false;

  // undefined κ°μ΄ μλμ§ μλμ§ μλ¬΄κ²λ κ²°μ λμ§ μμ μν
  let name: undefined; // π©
  let age: number | undefined; // undefinedλ₯Ό λ λ§μ΄ μ΄μ©νλ€.
  age = undefined;
  age = 1;
  function find(): number | undefined {
    // λ¬΄μΈκ°κ° μκ³  μμ λ λ§μ΄ μ¬μ©νλ€.
    return undefined;
  }

  // null κ°μ΄ λΉμ΄ μλ μν
  let person: null; // π©
  let person2: string | null;

  // unknown μμ μλ  π© μ¬λ§νλ©΄ μ°μ§ μλ κ²μ΄ μ’λ€. μ λ§ λΆκ°νΌν κ²½μ° νμμ λν  μ μλ λ°©λ²μ΄ μμλλ§ μ¬μ©
  let notSure: unknown = 0;
  notSure = 'he';
  notSure = true;

  // any  π©  μ¬λ§νλ©΄ μ°μ§ μλ κ²μ΄ μ’λ€. μ λ§ λΆκ°νΌν κ²½μ° νμμ λν  μ μλ λ°©λ²μ΄ μμλλ§ μ¬μ©
  let anything: any = 0;
  anything = 'hello';

  // void
  // μλ¬΄κ²λ λ¦¬ν΄νμ§ μμΌλ©΄ void νμμ΄ λλ€.
  // void μλ΅ κ°λ₯
  function print(): void {
    console.log('hello');
    return;
  }
  let unusable: void = undefined; // π©

  // never
  // λ¦¬ν΄νλ κ°μ΄ μλ€.
  // ν¨μμμ μ λ λ¦¬ν΄νμ§ μλ κ²½μ°μ κ·Έκ²μ λͺμνκΈ° μν΄ μ°μΈλ€.
  function throwError(message: string): never {
    // message -> server (log)
    throw new Error(message);
    // while(true) {

    // }
    // return; μλ¬
    // never νμμ μ λλ‘ λ€λ₯Έ κ²μ λ¦¬ν΄ν  μ μκ³ 
    // μλ¬λ₯Ό λμ Έμ£Όλ μ½λλ₯Ό μμ±νλμ§ whileλ¬Έμ λλ©΄μ λλμ§ μκ² κ³μ μ½λλ₯Ό μμ±ν΄μΌ νλ€.
  }
  let neverEnding: never; // π©

  // object
  // π© κ΄λ²μνκ³  μΆμμ μ΄κΈ° λλ¬Έμ μ°μ§ μλ κ²μ΄ μ’λ€.
  // κ°λ₯νλ©΄ μ΄λ€ νμμΈμ§ λͺμν΄μ£Όλ κ²μ΄ μ’λ€.
  // μμνμμ μ μΈν λͺ¨λ  objectλ₯Ό μ λ¬ν  μ μλ€.
  let obj: object;
  function acceptSomeObject(obj: object) {}
  acceptSomeObject({ name: 'sunmin' });
  acceptSomeObject({ animal: 'dog' });
}
