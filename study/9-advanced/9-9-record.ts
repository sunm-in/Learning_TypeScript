// 🔍 Record Type
// 맵과 비슷하게 하나와 어떤 하나를 연결하고 싶을 때, 하나를 키로 쓰고 나머지를 다른 타입으로 묶고 싶을 때 유용하게 쓸 수 있다.
type PageInfo = {
  title: string;
};

type Page = 'home' | 'about' | 'contact';

const nav: Record<Page, PageInfo> = {
  home: { title: 'Home' },
  about: { title: 'About' },
  contact: { title: 'Contact' },
};

// 👀 기타 (Capitalize Type)
type Product = 'cat' | 'dog';
type NewProduct = Capitalize<Product>; // 'Cat' | 'Dog'
// Capitalize을 사용하면 대문자로 Cat과 Dog 이렇게 사용할 수가 있다.
