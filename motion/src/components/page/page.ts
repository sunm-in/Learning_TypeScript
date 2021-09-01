// component
import {
  EnableDragging,
  EnableDrop,
  EnableHover,
} from '../../decorators/draggable.js';
import { Draggable, Droppable, Hoverable } from '../common/type.js';
import { BaseComponent, Component } from './../component.js';

export interface Composable {
  addChild(child: Component): void;
}
type OnCloseListener = () => void;
type DragState = 'start' | 'stop' | 'enter' | 'leave';
type OnDragStateListener<T extends Component> = (
  target: T,
  state: DragState,
) => void;

interface SectionContainer extends Component, Composable, Draggable, Hoverable {
  setOnCloseListener(listener: OnCloseListener): void;
  setOnDragStateListener(listener: OnDragStateListener<SectionContainer>): void;
  muteChildren(state: 'mute' | 'unmute'): void;
  getBoundingRect(): DOMRect;
  onDropped(): void;
}

type SectionContainerConstructor = {
  new (): SectionContainer;
};

@EnableDragging
@EnableHover
export class PageItemComponent
  extends BaseComponent<HTMLElement>
  implements SectionContainer
{
  private closeListener?: OnCloseListener;
  private dragStateListener?: OnDragStateListener<PageItemComponent>;

  constructor() {
    super(`<li draggable="true" class="page-item">
            <section class="page-item__body">
              <div class="page-item__controls">
                <button class="close">&times;</button>
              </div>
            </section>
          </li>`);
    const closeBtn = this.element.querySelector('.close')! as HTMLButtonElement;
    closeBtn.onclick = () => {
      this.closeListener && this.closeListener();
    };
  }
  onDragStart(_: DragEvent) {
    this.notifyDragObservers('start');
    this.element.classList.add('lifted');
  }
  onDragEnd(_: DragEvent) {
    this.notifyDragObservers('stop');
    this.element.classList.remove('lifted');
  }
  onDragEnter(_: DragEvent) {
    this.notifyDragObservers('enter');
    this.element.classList.add('drop-area');
  }
  onDragLeave(_: DragEvent) {
    this.notifyDragObservers('leave');
    this.element.classList.remove('drop-area');
  }

  onDropped() {
    this.element.classList.remove('drop-area');
  }

  notifyDragObservers(state: DragState) {
    this.dragStateListener && this.dragStateListener(this, state);
  }

  addChild(child: Component) {
    const container = this.element.querySelector(
      '.page-item__body',
    )! as HTMLElement;
    child.attachTo(container);
  }

  setOnCloseListener(listener: OnCloseListener) {
    this.closeListener = listener;
  }

  setOnDragStateListener(listener: OnDragStateListener<PageItemComponent>) {
    this.dragStateListener = listener;
  }

  muteChildren(state: 'mute' | 'unmute') {
    if (state === 'mute') {
      this.element.classList.add('mute-children');
    } else {
      this.element.classList.remove('mute-children');
    }
  }

  getBoundingRect(): DOMRect {
    return this.element.getBoundingClientRect();
  }
}

// element라는 내부 스테이트, 이 element는 DOM 요소 중의 하나로 생성자 안에서 우리가 원하는 DOM 요소를 만들어 준 다음에
// attachTo라는 함수를 호출해야지만 전달받은 parent 요소에 우리가 만든 DOM 요소를 붙여주는 일을 하고 있다.
@EnableDrop
export class PageComponent
  extends BaseComponent<HTMLUListElement>
  implements Composable, Droppable
{
  private children = new Set<SectionContainer>();
  private dropTarget?: SectionContainer;
  private dragTarget?: SectionContainer;

  constructor(private pageItemConstructor: SectionContainerConstructor) {
    super('<ul class="page"></ul>');
  }
  onDragOver(_: DragEvent): void {}
  onDrop(event: DragEvent) {
    if (!this.dropTarget) {
      return;
    }
    if (this.dragTarget && this.dragTarget !== this.dropTarget) {
      const dropY = event.clientY;
      const srcElement = this.dragTarget.getBoundingRect();
      this.dragTarget.removeFrom(this.element);
      this.dropTarget.attach(
        this.dragTarget,
        dropY < srcElement.y ? 'beforebegin' : 'afterend',
      );
      this.dragTarget.onDropped();
    }
  }

  addChild(section: Component) {
    const item = new this.pageItemConstructor();
    item.addChild(section);
    item.attachTo(this.element, 'beforeend');
    item.setOnCloseListener(() => {
      item.removeFrom(this.element);
      this.children.delete(item);
    });
    this.children.add(item);
    item.setOnDragStateListener(
      (target: SectionContainer, state: DragState) => {
        switch (state) {
          case 'start':
            this.dragTarget = target;
            this.updateSections('mute');
            break;
          case 'stop':
            this.dragTarget = undefined;
            this.updateSections('unmute');
            break;
          case 'enter':
            this.dropTarget = target;
            break;
          case 'leave':
            this.dropTarget = undefined;
            break;
          default:
            throw new Error(`unsupported state: ${state}`);
        }
      },
    );
  }

  private updateSections(state: 'mute' | 'unmute') {
    this.children.forEach((section: SectionContainer) => {
      section.muteChildren(state);
    });
  }
}
