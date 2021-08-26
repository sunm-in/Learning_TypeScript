export interface Component {
  attachTo(parent: HTMLElement, position?: InsertPosition): void;
  removeFrom(parent: HTMLElement): void;
}

/**
 * Encapsulate the HTML element creation
 */

// 제네릭 T타입 -> 반드시 HTMLElement이거나 HTMLElement를 상속하는 서브클래스에만 가능
export class BaseComponent<T extends HTMLElement> implements Component {
  // 외부에서 볼 수 없고 이것을 상속하는 자식 클래스에서만 접근 가능
  // 한번 만들어진 element는 읽기만 가능, 요소를 만들면 요소 안에 상태들은 변경이 가능하지만 요소 자체를 다른 것으로 변경하는 것은 불가
  protected readonly element: T;
  constructor(htmlString: string) {
    const template = document.createElement('template');
    template.innerHTML = htmlString;
    this.element = template.content.firstElementChild! as T;
  }

  // parent: HTMLElement라면, 즉 HTMLElement를 상속하는 그 어떤 자식 요소들도 전달할 수 있다.
  attachTo(parent: HTMLElement, position: InsertPosition = 'afterbegin') {
    parent.insertAdjacentElement(position, this.element);
  }

  removeFrom(parent: HTMLElement) {
    if (parent !== this.element.parentElement) {
      throw new Error('Parent mismatch!');
    }
    parent.removeChild(this.element);
  }
}
