{
  // ๐ Omit Type
  // Pick๊ณผ ๋ฐ๋๋ก ์ํ๋ ๊ฒ์ ๋นผ๋ฒ๋ฆฌ๋ ๊ฒ์ ํ  ์ ์๋ค.

  // โ ๋นผ๊ณ ์ ํ๋ ๊ฒ์ด ๋ ๋ชํํ๋ค๋ฉด Omit Type์, ์ ํํ๊ณ ์ ํ๋ ๊ฒ์ด ๊ฐ๋จํ๋ค๋ฉด Pick Type์ ์ด์ฉํ๊ธฐ

  type Video = {
    id: string;
    title: string;
    url: string;
    data: string;
  };

  // Omit์ ์ ๋ฌ๋๋ ํค๊ฐ Video์ ์๋ ๊ฒ๋ ๊ฐ๋ฅํ๋ค. -> ๋น๋์ค์ ์ด๊ฒ๋ค์ด ์๋ค๋ฉด ๊ทธ๊ฒ์ ์ ์ธํ ๊ฒ์ ๋ง๋ค๊ธฐ ๋๋ฌธ์ ๋ค๋ฅธ ์ด๋ค ์ข๋ฅ์ ํค๋ ์ ๋ฌ ๊ฐ๋ฅํ๋ค.
  type VideoMetadata = Omit<Video, 'url' | 'data'>;

  function getVideo(id: string): Video {
    return {
      id,
      title: 'video',
      url: 'https://..',
      data: 'byte-data..',
    };
  }

  function getVideoMetadata(id: string): VideoMetadata {
    return {
      id: id,
      title: 'title',
    };
  }
}
