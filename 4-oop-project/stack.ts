interface Stack {
  // size 속성으로 스택 안에 몇 개의 문자열이 있는지 알고 그 개수만큼 pop을 호출할 수 있다.
  // size는 외부에서 변경이 불가능하므로 read only -> 값을 변경할 수 없고 내부적으로 결정되는 사이즈
  readonly size: number;
  push(value: string): void;
  pop(): string;
}

// 데이터를 정의할 땐 사용자가 데이터를 넣어서 우리가 한 단계 감싸는 무언가를 만든다면 불변성을 유지하는 것이 좋다.
// 그래서 전달된 값이 있다면 이 값이 들어왔을 때 한번 만들어지면 그 내용물이 절대 변경되지 않도록 불변성을 유지해주는 것이 좋다.(readonly)
type StackNode = {
  readonly value: string;
  readonly next?: StackNode;
};

/**
 * 단일 연결 리스트: 연결된 흐름이 하나밖에 없다.
 * head라는 것이 있는데 이 head가 가리키고 있는 head에 할당된 것들을 이용해서 아이템 하나 하나씩 찾아나가는 방식
 */
// 이중 연결 리스트: 역방향도 가르킬 수 있은 것을 말한다.

// Implementation을 보통 Impl까지만 써준다
class StackImpl implements Stack {
  // 외부에서 쓰이는 것과 내부에서 쓰는 것의 이름이 동일한 경우에는 _(underscore)를 써서 작성할 수 있다.
  // -> 내부에서만 쓰이는 변수고 동일한 pubilc 변수가 있다고 이해할 수 있다.
  private _size: number = 0;
  private head?: StackNode;

  // 자료구조를 만들 때 얼마만큼의 size를 허용할 건지 initial value를 설정해 주면 좋다.
  constructor(private capacity: number) {}
  get size() {
    return this._size;
  }
  push(value: string) {
    if (this.size === this.capacity) {
      throw new Error('Stack is full');
    }
    const node: StackNode = { value, next: this.head };
    this.head = node;
    this._size++;
  }
  pop(): string {
    if (this.head == null) {
      throw new Error('Stack is empty!');
    }
    const node = this.head;
    this.head = node.next;
    this._size--;
    return node.value;
  }
}

const stack = new StackImpl(10);
stack.push('AAA 1');
stack.push('BBB 2');
stack.push('CCC 3');
while (stack.size !== 0) {
  console.log(stack.pop());
}

stack.pop(); // Stack is empty!
