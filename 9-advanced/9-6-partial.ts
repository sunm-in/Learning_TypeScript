{
  type ToDo = {
    title: string;
    description: string;
    label: string;
    priority: 'high' | 'low';
  };

  // ToDo에서 부분적으로 title과 description을 업데이트 할 수도 있고 label만 업데이트 할 수도 있다. -> Partial 타입이 굉장히 유용하개 쓰인다.
  function updateToDo(todo: ToDo, fieldsToUpdate: Partial<ToDo>): ToDo {
    return { ...todo, ...fieldsToUpdate };
  }
  const todo: ToDo = {
    title: 'learn TypeScript',
    description: 'study hard',
    label: 'study',
    priority: 'high',
  };
  const updated = updateToDo(todo, { priority: 'low' });
  console.log(updated); // {title: 'learn TypeScript', description: 'study hard', label: 'study', priority: 'low'}

  // ✅ 기존의 타입 중에서 부분적인 것만 허용하고 싶을 때 이용하면 좋다.
}
