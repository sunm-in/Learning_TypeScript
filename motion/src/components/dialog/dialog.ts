// import
import { BaseComponent, Component } from './../component.js';
import { Composable } from './../page/page.js';

type OnCloseListener = () => void;
type OnSubmitListener = () => void;

export class InputDialog
  extends BaseComponent<HTMLElement>
  implements Composable
{
  closeListener?: OnCloseListener;
  submitListener?: OnSubmitListener;
  constructor() {
    super(`<dialog class="dialog">
           <div class="dialog__container">
            <button class="close">&times;</button>
            <div id="dialog__body"></div>
            <button class="dialog__submit">ADD</button>
           </div>
          </dialog>`);
    const closeBtn = this.element.querySelector('.close')! as HTMLElement;
    // closeBtn.addEventListener('click', ''); 보통은 addEventListener를 등록해서 사용하는 것이 좋다.
    // Close 버튼에 다른 이벤트가 등록이 되면 다른 곳에서 이벤트 리스너를 계속 등록할 수 있고 다수의 리스너가 등록되어져 있으면,
    // 등록된 순서대로 모든 콜백 함수가 호출이 되고 onclick에 이렇게 할당하는 것은 기존에 다른 리스너가 등록되어져 있으면 그것을 덮어 씌우는 효과가 있다.
    // 이 컴포넌트 안에서 등록하는 곳이 한 군데라면 onclick을 할당하는 것이 괜찮지만 만약 버튼을 다른 곳에서도 사용한다면 addEventListener를 이용해서 처리하는 것이 좋다.
    closeBtn.onclick = () => {
      this.closeListener && this.closeListener();
    };
    const submitBtn = this.element.querySelector(
      '.dialog__submit'
    )! as HTMLElement;
    submitBtn.onclick = () => {
      this.submitListener && this.submitListener();
    };
  }

  setOnCloseListener(listener: OnCloseListener) {
    this.closeListener = listener;
  }
  setOnSubmitListener(listener: OnSubmitListener) {
    this.submitListener = listener;
  }
  addChild(child: Component) {
    const body = this.element.querySelector('#dialog__body')! as HTMLElement;
    child.attachTo(body);
  }
}
