{
  // 맵 타입은 기존에 있는 타입들을 이용하면서 조금 다른 형태로 변환할 수 있는 것을 말한다.
  type Video = {
    title: string;
    author: string;
  };
  // [1, 2].map(item => item * item); // [1, 4]

  /**
  변경이 되면 다 수정을 해줘야함 -> 이것들을 간편하게 하고 또 재사용성을 높일 수 있게 하는 것이 맵 타입이다.
  type VideoOptional = {
    title?: string;
    author?: string;
  };

  type VideoReadOnly = {
    readonly title: string;
    readonly author: string;
  };
   */

  // 맵 타입을 이용하면 재사용이 높다
  // (1) in keyof
  type Optional<T> = {
    [P in keyof T]?: T[P]; // for...in
  };

  type VideoOptional = Optional<Video>;
  const videoOp: VideoOptional = {
    // 이제 다 Optional이 된다. 대신에 Video에 들어 있는 것들 중에 있어도 되고 없어도 되지만
    // 만약 Video 타입 안에 없었던 다른 종류의 타입을 넣게 되면 에러가 발생한다.
  };

  // (2) optional
  type Animal = {
    name: string;
    age: number;
  };
  const animal: Optional<Animal> = {
    name: 'dog',
  };
  animal.name = 'min';

  // (3) readonly
  type ReadOnly<T> = {
    readonly [P in keyof T]: T[P];
  };
  const video: ReadOnly<Video> = {
    title: 'hi',
    author: 'min',
  };
  // video.author =  // 기존의 타입에서 readonly으로 변화시키고 author값을 변경하려고 하면 에러가 발생한다.

  // (4) null
  type Nullable<T> = { [P in keyof T]: T[P] | null };
  // Nullable 타입을 이용하면 value 본연의 타입을 써도 되고 null을 사용해도 된다.
  const obj2: Nullable<Video> = {
    title: 'hi',
    author: null,
  };

  // 타입스크립트 공식 문서 예제
  type Proxy<T> = {
    get(): T;
    set(value: T): void;
  };

  type Proxify<T> = {
    [P in keyof T]: Proxy<T[P]>;
  };
  // ✅ 이처럼 맵 타입을 이용하면 기존에 있는 타입에서 조금 더 다른 형태로 변환할 수 있다.
}
