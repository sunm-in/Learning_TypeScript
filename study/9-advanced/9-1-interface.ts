{
  // π Type Aliasμ Interface κ΅¬ν μ°¨μ΄
  type PositionType = {
    x: number;
    y: number;
  };
  interface PositionInterface {
    x: number;
    y: number;
  }

  // Type Aliasμ Interface λ λ€ κ°λ₯ν κ² -> β­οΈ
  // object β­οΈ
  const obj1: PositionType = {
    x: 1,
    y: 1,
  };
  const obj2: PositionInterface = {
    x: 1,
    y: 1,
    z: 1,
  };

  // class β­οΈ
  class Pos1 implements PositionType {
    x: number;
    y: number;
  }
  class Pos2 implements PositionInterface {
    x: number;
    y: number;
    z: number;
  }

  // Extends β­οΈ
  interface ZPositionInterface extends PositionInterface {
    z: number;
  }
  type ZPositionType = PositionType & { z: number };

  // β only interface can be merged
  interface PositionInterface {
    z: number;
  }

  // type PositionType {
  // }

  // β Type aliases can use computed properties
  type Person = {
    name: string;
    age: number;
  };
  type Name = Person['name']; // string

  type NumberType = number;
  type Direction = 'left' | 'right'; // μ λμ¨ νμμ μΈν°νμ΄μ€λ‘λ μ λ κ΅¬νν  μ μλ€.

  /**
   * π Type Aliasμ Interface κ΅¬ν μ°¨μ΄ (κ°λ μΈ‘λ©΄)
   *
   *
   * π Interface -> μ΄λ€ κ²μ κ·κ²© μ¬ν­
   * λ€λ₯Έ μ¬λλ€κ³Ό μμ¬μν΅ν  λ, μ€λΈμ νΈμ μ€λΈμ νΈ κ°μ μμ¬μν΅μ ν  λ μ΄ μ ν΄μ§ μΈν°νμ΄μ€λ₯Ό ν λλ‘ ν΄μ μλ‘ κ°μ μνΈ μμ©μ ν  μ μλλ‘ λμμ€λ€.
   * APIλ μλ‘κ°μ μ½μμ ν  μ μλ κ³μ½μμ λμΌνλ€.
   * β μ΄λ€ νΉμ ν κ·κ²©μ μ μνκ±°λ μ΄ κ·κ²©μ ν΅ν΄μ μ΄λ€ κ²μ΄ κ΅¬νλλ€λ©΄ μΈν°νμ΄μ€λ₯Ό μ°λ κ²μ΄ λ μ ννλ€.
   *
   *
   * π Types
   * -> μ΄λ ν λ°μ΄ν°λ₯Ό λ΄μ λ, μ΄λ ν λ°μ΄ν°λ₯Ό λ΄μ μ μμμ§ μ΄ λ°μ΄ν°μ λͺ¨μ΅ λ°μ΄ν°μ νμμ κ²°μ νλ€.
   * β μ΄λ ν κ²μ κ΅¬νν  λͺ©μ μΌλ‘ λ§λλ κ²μ΄ μλλΌ λ°μ΄ν°λ₯Ό λ΄μ λͺ©μ μΌλ‘ λ§λ λ€λ©΄ μΈν°νμ΄μ€λ³΄λ€λ νμμ μ°λ κ²μ΄ μ‘°κΈ λ μ’λ€.
   *
   *
   * μΈν°νμ΄μ€μ νμμ κ΅¬λΆν΄μ μ°λ κ² λ μ’λ€.
   */
}
