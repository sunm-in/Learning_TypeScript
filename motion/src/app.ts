// components
import { ImageComponent } from './components/page/item/image.js';
import { PageComponent } from './components/page/page.js';

// 전달받은 최고의 컨테이너 안에 페이지라는 컴포넌트를 만들어서, 만들어진 페이지를 붙여주는 일
class App {
  private readonly page: PageComponent;
  constructor(appRoot: HTMLElement) {
    this.page = new PageComponent();
    this.page.attachTo(appRoot);

    const image = new ImageComponent(
      'Image Title',
      'https://picsum.photos/600/300'
    );
    image.attachTo(appRoot, 'beforeend');
  }
}

// Type Assertion
new App(document.querySelector('.document')! as HTMLElement);
