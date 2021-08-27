// component
import { BaseComponent } from './../../component.js';

export class ImageComponent extends BaseComponent<HTMLElement> {
  constructor(title: string, url: string) {
    super(`<section class="image">
            <div class="image__holder"><img src="" alt="" class="image__thumbnail"></div>
            <h2 class="page-item__title image__title"></h2>
          </section>`);

    // 서용자에게 전달받은 데이터를 innerHTML에 설정하는 것을 좋지 않고 이렇게 필요한 부분만 업데이트해 주는 것이 더 안전하다.
    const imageElement = this.element.querySelector(
      '.image__thumbnail',
    )! as HTMLImageElement;
    imageElement.src = url;
    imageElement.alt = title;

    const titleElement = this.element.querySelector(
      '.image__title',
    )! as HTMLParagraphElement;
    titleElement.textContent = title;
  }
}
