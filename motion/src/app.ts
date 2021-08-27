// import
import { PageComponent, PageItemComponent } from './components/page/page.js';
import { ImageComponent } from './components/page/item/image.js';
import { TodoComponent } from './components/page/item/todo.js';
import { NoteComponent } from './components/page/item/note.js';
import { VideoComponent } from './components/page/item/video.js';
import { Component } from './components/component.js';
import { Composable } from './components/page/page.js';
import {
  InputDialog,
  MediaData,
  TextData,
} from './components/dialog/dialog.js';
import { MediaSectionInput } from './components/dialog/input/media-input.js';
import { TextSectionInput } from './components/dialog/input/text-input.js';

type InputComponentConstructor<T = (MediaData | TextData) & Component> = {
  new (): T;
};
// 전달받은 최고의 컨테이너 안에 페이지라는 컴포넌트를 만들어서, 만들어진 페이지를 붙여주는 일
class App {
  private readonly page: Component & Composable;
  constructor(appRoot: HTMLElement, private dialogRoot: HTMLElement) {
    this.page = new PageComponent(PageItemComponent);
    this.page.attachTo(appRoot);

    this.bindElementToDialog<MediaSectionInput>(
      '#new-image',
      MediaSectionInput,
      (input: MediaSectionInput) => new ImageComponent(input.title, input.url),
    );

    this.bindElementToDialog<MediaSectionInput>(
      '#new-video',
      MediaSectionInput,
      (input: MediaSectionInput) => new VideoComponent(input.title, input.url),
    );

    this.bindElementToDialog<TextSectionInput>(
      '#new-note',
      TextSectionInput,
      (input: TextSectionInput) => new NoteComponent(input.title, input.body),
    );

    this.bindElementToDialog<TextSectionInput>(
      '#new-todo',
      TextSectionInput,
      (input: TextSectionInput) => new TodoComponent(input.title, input.body),
    );

    // For demo :)
    this.page.addChild(
      new ImageComponent('Image Title', 'https://picsum.photos/800/400'),
    );
    this.page.addChild(
      new VideoComponent('Video Title', 'https://youtu.be/D7cwvvA7cP0'),
    );
    this.page.addChild(
      new NoteComponent('Note Title', "Don't forget to code your dream"),
    );
    this.page.addChild(new TodoComponent('Todo Title', 'TypeScript Course!'));
    this.page.addChild(
      new ImageComponent('Image Title', 'https://picsum.photos/800/400'),
    );
    this.page.addChild(
      new VideoComponent('Video Title', 'https://youtu.be/D7cwvvA7cP0'),
    );
    this.page.addChild(
      new NoteComponent('Note Title', "Don't forget to code your dream"),
    );
    this.page.addChild(new TodoComponent('Todo Title', 'TypeScript Course!'));
  }

  // 반복적으로 쓰이는 코드 블록을 복사하고, 이걸 함수로 만들어준다.
  // 반복적으로 쓰이는 것과 차이가 있는 것들은 어떤 것들이 있는지 그리고 그 차이점만 함수에 인자로 받아오면 된다.
  private bindElementToDialog<T extends (MediaData | TextData) & Component>(
    selector: string,
    InputComponent: InputComponentConstructor<T>,
    makeSection: (input: T) => Component,
  ) {
    const element = document.querySelector(selector)! as HTMLButtonElement;
    element.addEventListener('click', () => {
      const dialog = new InputDialog();
      const input = new InputComponent();
      dialog.addChild(input);
      dialog.attachTo(this.dialogRoot);

      dialog.setOnCloseListener(() => {
        dialog.removeFrom(this.dialogRoot);
      });
      dialog.setOnSubmitListener(() => {
        const image = makeSection(input);
        this.page.addChild(image);
        dialog.removeFrom(this.dialogRoot);
      });
    });
  }
}

// Type Assertion
new App(document.querySelector('.document')! as HTMLElement, document.body);
