{
  // π Pick Type
  // κΈ°μ‘΄μ νμμμ μνλ μμ±κ³Ό valueλ€λ§ κ³¨λΌμ λ§λ€μκ° μλ€.

  type Video = {
    id: string;
    title: string;
    url: string;
    data: string;
  };

  // λλ€ν κ³³μμ λ°λ‘ μ°κΈ°λ³΄λ€λ νμμ μ μΈν΄μ μ¬μ¬μ©ν  μ μλλ‘ λ§λλ κ²μ΄ μ’λ€.
  type VideoMetadata = Pick<Video, 'id' | 'title'>;

  // Video μ λ³΄λΏλ§ μλλΌ Videoμ byte-dataλ λ€ λ¦¬ν΄νλ λ¬΄κ±°μ΄ API
  function getVideo(id: string): Video {
    return {
      id,
      title: 'video',
      url: 'https://..',
      data: 'byte-data..',
    };
  }

  // Videoμ κ΄λ ¨λ κ°λ΅ν λ°μ΄ν°λ§ λ¦¬ν΄νλ νμ
  function getVideoMetadata(id: string): VideoMetadata {
    return {
      id: id,
      title: 'title',
    };
  }
}
