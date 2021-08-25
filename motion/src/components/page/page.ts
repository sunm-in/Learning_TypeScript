// component
import { BaseComponent } from './../component.js';

// element라는 내부 스테이트, 이 element는 DOM 요소 중의 하나로 생성자 안에서 우리가 원하는 DOM 요소를 만들어 준 다음에
// attachTo라는 함수를 호출해야지만 전달받은 parent 요소에 우리가 만든 DOM 요소를 붙여주는 일을 하고 있다.
export class PageComponent extends BaseComponent<HTMLUListElement> {
  constructor() {
    super('<ul class="page">This is PageComponent!</ul>');
  }
}
