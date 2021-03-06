/**
 *  Type Assertions ๐ฉ
 */
function jsStrFunc(): any {
  return 'hello';
}
const result = jsStrFunc();
// result๋ anyํ์์ด๊ธฐ ๋๋ฌธ์ ๋ฌธ์์ด ํ์์ด ์๋๋ผ์ ๋ฌธ์์ด ํ์์์ ์ฌ์ฉ ๊ฐ๋ฅํ API๋ฅผ ์ฌ์ฉํ  ์ ์๋ค.
// ํจ์์์ ๋ฌธ์์ด ๋ฆฌํดํ๋ ๊ฒ์ ํ์ ํ  ๋ Type Assertion์ ์ฌ์ฉํ  ์ ์๋ค.
console.log((result as string).length); // (result as string) -> result๋ผ๋ ๋ณ์๋ฅผ ๋ฌธ์์ด์ฒ๋ผ ์ฌ์ฉํ ๊ฑฐ๋ผ๋ ์๋ฏธ
console.log((<string>result).length); // (<string>result) ์ด๋ฐ์์ผ๋ก ์์ฑํด๋ ๋์ผํ๋ค.

// ๋ฆฌํด ๊ฐ์ด ๋ฌธ์์ด์ด ์๋ ์ซ์๋ฅผ ๋ฆฌํดํ  ๋ ์ฝ๋๋ฅผ ์์ฑํ๋ ์์ ์๋ ์๋ฌ๋ ๊ฒฝ๊ณ  ๋ฉ์ธ์ง๊ฐ ๋ฐ์ํ์ง ์๋๋ค.
// ํ์ง๋ง ์คํํ๋ ์๊ฐ undefined๋ผ๊ณ  ๋์ค๋๊ฑธ ๋ณผ ์ ์๋ค. (์ค์๊ฐ์ผ๋ก ์์ํ์ง ๋ชปํ ๋ฌธ์ ๊ฐ ๋ฐ์ํ  ์ ์๋ค.)
// ์ด๋ฌํ ์ด์ ๋ก ์ธํด Type Assertion์ 100% ์ฅ๋ด์ ํ  ์ ์์ ๋ ์ฌ์ฉํด์ผ ํ๋ค.

// ์๋ฌ๊ฐ ๋ฐ์ํ๋ ์์
const wrong: any = 5;
console.log((wrong as Array<number>).push(1)); // ๐จ

function findNumbers(): number[] | undefined {
  return undefined;
}
const numbers = findNumbers();
// numbers.push(2); // numbers๋ ์ซ์ ๋ฐฐ์ด์ผ ์๋ ์์ง๋ง undefined์ผ ์๋ ์๊ธฐ ๋๋ฌธ์ push๋ฅผ ์ฐ๋ ๊ฒ์ ์ข์ง ์๋ค.

// ๋ฐฐ์ด์ด๋ผ๊ณ  ํ์ ํ  ๋, ! -> ์ต์์ด ์๋๊ณ  ์ ๋์ ์ผ๋ก ๊ฐ์ด ์๋ค๊ณ  ํ์ ํ  ๋ ์ ํํ๋ ๊ฒ -> numbers!.push(2);
numbers!.push(2);
// ํจ์๋ฅผ ํธ์ถํ ๋ค์์ ๋๋ํ๋ฅผ ๋ถ์ฌ๋ ๋๋ค. -> const numbers = findNumbers()!;

// ์์
const button = document.querySelector('class')!; // 100% ํ์ ํ  ๋ ๋ค์ !๋ฅผ ์ธ ์ ์๋ค.
button.nodeValue; // button์ null์ผ ์๋ ์๊ธฐ ๋๋ฌธ์ ์๋ฌ ๋ฐ์
// ์ด๋ฐ์์ผ๋ก ์ ๊ทผ์ ๊ฐ๋ฅํ๋ค.
if (button) {
  button.nodeValue;
}

// {
//   /**
//    * Type Assertions ๐ฉ
//    */
//   function jsStrFunc(): any {
//     return 2;
//   }
//   const result = jsStrFunc();
//   console.log((result as string).length);
//   console.log((<string>result).length);

//   const wrong: any = 5;
//   console.log((wrong as Array<number>).push(1)); // ๐ฑ

//   function findNumbers(): number[] | undefined {
//     return undefined;
//   }
//   const numbers = findNumbers()!;
//   numbers.push(2); // ๐ฑ

//   const button = document.querySelector('class')!;
// }
