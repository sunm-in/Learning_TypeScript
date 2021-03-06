// ๐ Record Type
// ๋งต๊ณผ ๋น์ทํ๊ฒ ํ๋์ ์ด๋ค ํ๋๋ฅผ ์ฐ๊ฒฐํ๊ณ  ์ถ์ ๋, ํ๋๋ฅผ ํค๋ก ์ฐ๊ณ  ๋๋จธ์ง๋ฅผ ๋ค๋ฅธ ํ์์ผ๋ก ๋ฌถ๊ณ  ์ถ์ ๋ ์ ์ฉํ๊ฒ ์ธ ์ ์๋ค.
type PageInfo = {
  title: string;
};

type Page = 'home' | 'about' | 'contact';

const nav: Record<Page, PageInfo> = {
  home: { title: 'Home' },
  about: { title: 'About' },
  contact: { title: 'Contact' },
};

// ๐ ๊ธฐํ (Capitalize Type)
type Product = 'cat' | 'dog';
type NewProduct = Capitalize<Product>; // 'Cat' | 'Dog'
// Capitalize์ ์ฌ์ฉํ๋ฉด ๋๋ฌธ์๋ก Cat๊ณผ Dog ์ด๋ ๊ฒ ์ฌ์ฉํ  ์๊ฐ ์๋ค.
