import { ANIME } from "./data.js";


const BASE_DNA = {

  SF: 92,

  ミステリー: 88,

  ファンタジー: 72,

  ドラマ: 76,

  青春: 62,

  サスペンス: 84,

  学園: 40,

  コメディ: 45,

  "ダークファンタジー": 70

};


export function getDNA(state) {

  const dna = {
    ...BASE_DNA
  };


  /*
   * 評価データ
   */
  Object.entries(
    state.ratings || {}
  ).forEach(
    ([animeId, rating]) => {

      const anime =
        ANIME.find(
          item => item.id === animeId
        );


      if (!anime) {
        return;
      }


      const difference =
        Number(rating) - 5;


      anime.genres.forEach(
        genre => {

          dna[genre] =
            clamp(
              (dna[genre] || 50) +
              difference * 2,
              0,
              100
            );

        }
      );

    }
  );


  /*
   * 興味なし
   */
  Object.keys(
    state.notInterested || {}
  ).forEach(
    animeId => {

      const anime =
        ANIME.find(
          item => item.id === animeId
        );


      if (!anime) {
        return;
      }


      anime.genres.forEach(
        genre => {

          dna[genre] =
            clamp(
              (dna[genre] || 50) - 8,
              0,
              100
            );

        }
      );

    }
  );


  return dna;

}


export function recommend(
  state,
  mode = "usual"
) {

  const dna =
    getDNA(state);


  const candidates =
    ANIME.map(
      anime => {

        let recommendationScore =
          anime.score * 10;


        /*
         * ジャンル適合度
         */
        anime.genres.forEach(
          genre => {

            const value =
              dna[genre] || 50;


            recommendationScore +=
              value * 0.22;

          }
        );


        /*
         * お気に入りによる関連性
         */
        if (
          state.favorites?.[anime.id]
        ) {

          recommendationScore +=
            10;

        }


        /*
         * 興味なし
         */
        if (
          state.notInterested?.[anime.id]
        ) {

          recommendationScore -=
            100;

        }


        /*
         * 隠れた作品
         */
        if (
          mode === "hidden"
        ) {

          recommendationScore +=
            Math.max(
              0,
              100 - anime.popularity
            ) * 0.7;

        }


        /*
         * 新しいジャンル
         */
        if (
          mode === "explore"
        ) {

          const hasLowInterestGenre =
            anime.genres.some(
              genre =>
                (dna[genre] || 50) < 55
            );


          if (
            hasLowInterestGenre
          ) {

            recommendationScore +=
              18;

          }

        }


        /*
         * 短時間
         */
        if (
          mode === "short"
        ) {

          if (
            anime.episodes <= 13
          ) {

            recommendationScore +=
              25;

          }

        }


        /*
         * 今期
         */
        if (
          mode === "season"
        ) {

          if (
            anime.year >= 2024
          ) {

            recommendationScore +=
              25;

          }

        }


        return {

          ...anime,

          _recommendScore:
            recommendationScore

        };

      }
    );


  return candidates
    .sort(
      (a, b) =>
        b._recommendScore -
        a._recommendScore
    )
    .slice(
      0,
      8
    );

}


export function matchScore(
  anime,
  state
) {

  const dna =
    getDNA(state);


  if (
    !anime ||
    !anime.genres?.length
  ) {

    return 50;

  }


  const values =
    anime.genres.map(
      genre =>
        dna[genre] || 50
    );


  const average =
    values.reduce(
      (sum, value) =>
        sum + value,
      0
    ) / values.length;


  return Math.round(
    clamp(
      average,
      55,
      99
    )
  );

}


function clamp(
  value,
  min,
  max
) {

  return Math.min(
    max,
    Math.max(
      min,
      value
    )
  );

}
