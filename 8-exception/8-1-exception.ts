// Error State -> 우리가 예상할 수 있는 어플리케이션 내부에서 발생할 수 있는 Error 케이스
// Exception Error -> 우리가 전혀 예상할 수 없는 상태

// Java: Exception
// JavaScript: Error
// const array = new Array(10000000000000000); // RangeError: Invalid array length 유효하지 않은 배열의 개수
// RangeError -> Error클래스를 상속한 조금 더 세부적인 Error 클래스

// Error(Exception) Handling: try -> catch -> finally
// 1. 에러가 발생할 수 있는 부분을 시도 -> 2. 에러가 발생한다면 잡을 수 있다. -> 3. 에러가 발생하든 발생하지 않든 마무리 단계

function readFile(fileName: string): string {
  if (fileName === 'not exist!!') {
    throw new Error(`file not exist! ${fileName}`);
  }
  return 'file contents';
}

function closeFile(fileName: string) {
  //
}

function run() {
  const fileName = 'not exist!!'; // Error: file not exist! not exist!!
  // const fileName = 'file';

  // 에러가 발생하는 그 부분만 try로 감싸서 catch를 하고 finally를 하는 것이 더 좋다.
  try {
    console.log(readFile(fileName));
  } catch (error) {
    console.log(`catched!!`);
    return;
  } finally {
    // 항상 여기에 성공하든 실패하든지에 상관없이 무언가를 수행해야 된다면 finally를 적는 것이 좋고
    closeFile(fileName);
    console.log(`closed!!`); // try가 성공하든 실패하든 즉 catch가 호출되든 호출되지 않든 finally는 항상 호출하게 되어 있다.
  }
}
run();
