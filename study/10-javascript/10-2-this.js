/**
 * 🔍 This
 * this란 바로 클래스 자신을 가리키는 것을 말한다.
 *
 * 부르는 문맥에 따라서 변경될 수 있으므로 한 곳으로 오브젝트와 연결 하고 싶다면 bind라는 함수를 이용해서 묶어줘야 한다.
 *
 * ✅ arrow function을 이용하면 bind를 이용하지 않아도 연결이 된다.
 * arrow function을 이용하면 -> 다른 프로그래밍 언어에서 클래스안에 this를 이용하면 자기 자신을 가리키는 것처럼 선언될 당시 스코프의 this context를 유지한다.
 *
 */

console.log(this);

function simpleFunc() {
  console.log(this);
}
window.simpleFunc();
console.clear();
class Counter {
  count = 0;
  increase = () => {
    console.log(this);
  };
}

const counter = new Counter();
counter.increase();
// counter의 increase 포인터를 caller라는 변수로 할당했기 때문에 이제 여기에서 this의 정보를 잃어버리게 된다.
// let과 const로 선언한 변수는 윈도우에 등록되어져 있지 않으므로 이 caller를 호출하는 것은
// 윈도우가 아니라 그 어떤 오브젝트도 아니기 때문에 undefined이 호출한 것과 마찬가지이다.
// const caller = counter.increase;

// ✅ 정보를 잃어버리지 않으려면 할당할 때 counter의 increase라는 함수는 바인딩을 할건데 바로 counter 오브젝트와 바인딩을 해주면 된다.
const caller = counter.increase.bind(counter);
caller();

// 우리가 선언한 함수는 윈도우 객체에 기본적으로 등록이 된다. 하지만 let과 const로 선언된 변수는 윈도우에 등록되지 않는다.
// 👀 예외 사항 -> var 키워드는 윈도우에 등록이 된다.

class Bob {}
const bob = new Bob();
bob.run = counter.increase;
bob.run();
