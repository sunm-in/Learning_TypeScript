// either: a or b
interface Either<L, R> {
  left: () => L;
  right: () => R;
}

class SimpleEither<L, R> implements Either<L, R> {
  constructor(private leftValue: L, private rightValue: R) {}
  left(): L {
    return this.leftValue;
  }

  right(): R {
    return this.rightValue;
  }
}
const either = new SimpleEither(4, 5);
either.left(); // 4
either.right(); // 5
// ✅ 제네릭을 잘 활용하면 활용성이 높은 클래스를 만들 수 있고 또 활용성이 높은 함수도 만들 수 있다.
const best = new SimpleEither({ name: 'sunmin' }, 'hello');
