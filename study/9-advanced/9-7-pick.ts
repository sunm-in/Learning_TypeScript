{
  // 🔍 Pick Type
  // 기존의 타입에서 원하는 속성과 value들만 골라서 만들수가 있다.

  type Video = {
    id: string;
    title: string;
    url: string;
    data: string;
  };

  // 랜덤한 곳에서 바로 쓰기보다는 타입을 선언해서 재사용할 수 있도록 만드는 것이 좋다.
  type VideoMetadata = Pick<Video, 'id' | 'title'>;

  // Video 정보뿐만 아니라 Video의 byte-data도 다 리턴하는 무거운 API
  function getVideo(id: string): Video {
    return {
      id,
      title: 'video',
      url: 'https://..',
      data: 'byte-data..',
    };
  }

  // Video에 관련된 간략한 데이터만 리턴하는 타입
  function getVideoMetadata(id: string): VideoMetadata {
    return {
      id: id,
      title: 'title',
    };
  }
}
