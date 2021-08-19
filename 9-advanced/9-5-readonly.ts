{
  type ToDo = {
    title: string;
    description: string;
  };

  function display(todo: ToDo) {
    todo.title = 'qwrwrwqr'; // 이렇게 가변성의 수정이 가능한 타입의 오브젝트를 여기저기 전달하는 것은 굉장히 위험하다.
  }

  // ✅ 항상 불변성을 보장하는 것이 좋다.
  function displayReadOnly(todo: Readonly<ToDo>) {
    // todo.title = 'qqqqqq'; // 수정하게 되면 이제 오류가 발생한다.
  }
}
