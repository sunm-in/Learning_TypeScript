{
  // 🔍 Omit Type
  // Pick과 반대로 원하는 것을 빼버리는 것을 할 수 있다.

  // ✅ 빼고자 하는 것이 더 명확하다면 Omit Type을, 선택하고자 하는 것이 간단하다면 Pick Type을 이용하기

  type Video = {
    id: string;
    title: string;
    url: string;
    data: string;
  };

  // Omit에 전달되는 키가 Video에 없는 것도 가능하다. -> 비디오에 이것들이 있다면 그것을 제외한 것을 만들기 때문에 다른 어떤 종류의 키도 전달 가능하다.
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
