/* =========================================================
   Anime Lively
   Application JavaScript
   ========================================================= */


/* =========================================================
   DEMO DATABASE
   ========================================================= */

const animeData = [

  {
    id: "AL00000001",
    title: "シュタインズ・ゲート",
    titleEn: "STEINS;GATE",
    year: 2011,
    season: "春",
    type: "TV",
    episodes: 24,
    score: 9.1,
    trend: "+12%",
    popularity: 96,
    corePopularity: 94,
    genres: [
      "SF",
      "ミステリー",
      "サスペンス",
      "ドラマ"
    ],
    tags: [
      "タイムリープ",
      "伏線",
      "科学",
      "秋葉原"
    ],
    status: "完結",
    description:
      "過去と未来を巡る壮大な物語。複雑な伏線と緻密な設定が特徴のSF作品。",
    recommendationReason:
      "SF・ミステリー・伏線重視の作品への高評価傾向と一致しています。",
    color: "blue"
  },


  {
    id: "AL00000002",
    title: "サマータイムレンダ",
    titleEn: "Summer Time Rendering",
    year: 2022,
    season: "春",
    type: "TV",
    episodes: 25,
    score: 8.7,
    trend: "+19%",
    popularity: 88,
    corePopularity: 91,
    genres: [
      "SF",
      "ミステリー",
      "サスペンス"
    ],
    tags: [
      "タイムリープ",
      "ループ",
      "島",
      "伏線"
    ],
    status: "完結",
    description:
      "故郷の島で起こる不可解な事件と、時間を巡る戦いを描く。",
    recommendationReason:
      "シュタインズ・ゲート系のSF・ミステリー作品として高い適合度があります。",
    color: "cyan"
  },


  {
    id: "AL00000003",
    title: "ロクでなし魔術講師と禁忌教典",
    titleEn: "Akashic Records",
    year: 2017,
    season: "春",
    type: "TV",
    episodes: 12,
    score: 8.0,
    trend: "+24%",
    popularity: 73,
    corePopularity: 86,
    genres: [
      "ファンタジー",
      "学園",
      "魔法",
      "コメディ"
    ],
    tags: [
      "魔術",
      "学園",
      "教師",
      "バトル"
    ],
    status: "完結",
    description:
      "問題教師グレンと生徒たちを中心に描かれる魔術学園ファンタジー。",
    recommendationReason:
      "ファンタジーとキャラクター性を重視する傾向との一致度が高い作品です。",
    color: "purple"
  },


  {
    id: "AL00000004",
    title: "東のエデン",
    titleEn: "Eden of the East",
    year: 2009,
    season: "春",
    type: "TV",
    episodes: 11,
    score: 8.6,
    trend: "+14%",
    popularity: 82,
    corePopularity: 90,
    genres: [
      "SF",
      "サスペンス",
      "ドラマ"
    ],
    tags: [
      "社会派",
      "謎",
      "ゲーム",
      "オリジナル"
    ],
    status: "完結",
    description:
      "記憶を失った青年と、日本を巡る巨大なゲームを描くオリジナルアニメ。",
    recommendationReason:
      "オリジナル作品・謎・社会的テーマを好む傾向と一致しています。",
    color: "green"
  },


  {
    id: "AL00000005",
    title: "Re:ゼロから始める異世界生活",
    titleEn: "Re:ZERO",
    year: 2016,
    season: "春",
    type: "TV",
    episodes: 50,
    score: 8.8,
    trend: "+11%",
    popularity: 95,
    corePopularity: 94,
    genres: [
      "異世界",
      "ファンタジー",
      "ダークファンタジー",
      "ドラマ"
    ],
    tags: [
      "ループ",
      "心理",
      "成長",
      "伏線"
    ],
    status: "放送中",
    description:
      "死に戻りの能力を持つ少年が、過酷な運命に立ち向かう。",
    recommendationReason:
      "重い展開・ループ・心理描写への高い関心と一致しています。",
    color: "red"
  },


  {
    id: "AL00000006",
    title: "無職転生 ～異世界行ったら本気だす～",
    titleEn: "Mushoku Tensei",
    year: 2021,
    season: "冬",
    type: "TV",
    episodes: 48,
    score: 8.9,
    trend: "+16%",
    popularity: 94,
    corePopularity: 93,
    genres: [
      "異世界",
      "ファンタジー",
      "ドラマ",
      "冒険"
    ],
    tags: [
      "成長",
      "世界観",
      "魔法",
      "人生"
    ],
    status: "放送中",
    description:
      "異世界で人生をやり直す主人公の成長と冒険を描く。",
    recommendationReason:
      "世界観・キャラクター成長・重厚なファンタジーへの適合度が高いです。",
    color: "orange"
  },


  {
    id: "AL00000007",
    title: "青春ブタ野郎はバニーガール先輩の夢を見ない",
    titleEn: "Rascal Does Not Dream",
    year: 2018,
    season: "秋",
    type: "TV",
    episodes: 13,
    score: 8.8,
    trend: "+9%",
    popularity: 92,
    corePopularity: 89,
    genres: [
      "青春",
      "ドラマ",
      "SF",
      "学園"
    ],
    tags: [
      "青春",
      "思春期症候群",
      "心理",
      "謎"
    ],
    status: "完結",
    description:
      "思春期症候群と呼ばれる不可思議な現象に巻き込まれる青春ドラマ。",
    recommendationReason:
      "青春・SF・心理要素を含む作品への関心から推薦されています。",
    color: "pink"
  },


  {
    id: "AL00000008",
    title: "ノーゲーム・ノーライフ",
    titleEn: "NO GAME NO LIFE",
    year: 2014,
    season: "春",
    type: "TV",
    episodes: 12,
    score: 8.5,
    trend: "+7%",
    popularity: 90,
    corePopularity: 88,
    genres: [
      "ファンタジー",
      "ゲーム",
      "コメディ",
      "異世界"
    ],
    tags: [
      "頭脳戦",
      "ゲーム",
      "異世界",
      "兄妹"
    ],
    status: "完結",
    description:
      "ゲームでは負け知らずの兄妹が異世界で頭脳戦を繰り広げる。",
    recommendationReason:
      "複雑な設定・頭脳戦・独特な世界観への好みと一致します。",
    color: "purple"
  },


  {
    id: "AL00000009",
    title: "魔法少女まどか☆マギカ",
    titleEn: "Puella Magi Madoka Magica",
    year: 2011,
    season: "冬",
    type: "TV",
    episodes: 12,
    score: 9.0,
    trend: "+13%",
    popularity: 97,
    corePopularity: 96,
    genres: [
      "ダークファンタジー",
      "魔法少女",
      "心理",
      "SF"
    ],
    tags: [
      "世界観",
      "伏線",
      "シリアス",
      "オリジナル"
    ],
    status: "完結",
    description:
      "魔法少女という題材を独自の世界観で再構築したオリジナル作品。",
    recommendationReason:
      "独自世界観・伏線・シリアスなテーマを好む傾向と一致します。",
    color: "pink"
  },


  {
    id: "AL00000010",
    title: "プラスティック・メモリーズ",
    titleEn: "Plastic Memories",
    year: 2015,
    season: "春",
    type: "TV",
    episodes: 13,
    score: 8.2,
    trend: "+5%",
    popularity: 77,
    corePopularity: 85,
    genres: [
      "SF",
      "ドラマ",
      "ロマンス"
    ],
    tags: [
      "AI",
      "記憶",
      "別れ",
      "感動"
    ],
    status: "完結",
    description:
      "寿命を持つアンドロイドと人間の交流を描くSFドラマ。",
    recommendationReason:
      "SFと感情的なテーマの組み合わせとの相性が高い作品です。",
    color: "cyan"
  },


  {
    id: "AL00000011",
    title: "Angel Beats!",
    titleEn: "Angel Beats!",
    year: 2010,
    season: "春",
    type: "TV",
    episodes: 13,
    score: 8.5,
    trend: "+6%",
    popularity: 91,
    corePopularity: 89,
    genres: [
      "学園",
      "ドラマ",
      "ファンタジー"
    ],
    tags: [
      "青春",
      "人生",
      "感動",
      "Key"
    ],
    status: "完結",
    description:
      "死後の世界を舞台に、生前の未練と青春を描く。",
    recommendationReason:
      "感情的な物語と独特な世界設定を好む傾向から推薦されています。",
    color: "gold"
  },


  {
    id: "AL00000012",
    title: "この素晴らしい世界に祝福を！",
    titleEn: "KONOSUBA",
    year: 2016,
    season: "冬",
    type: "TV",
    episodes: 20,
    score: 8.4,
    trend: "+8%",
    popularity: 93,
    corePopularity: 87,
    genres: [
      "異世界",
      "コメディ",
      "ファンタジー"
    ],
    tags: [
      "ギャグ",
      "冒険",
      "異世界"
    ],
    status: "完結",
    description:
      "異世界を舞台にしたコメディ色の強いファンタジー。",
    recommendationReason:
      "ファンタジー作品の中でもキャラクター性を重視する傾向と一致します。",
    color: "green"
  }

];


/* =========================================================
   REVIEW DATA
   ========================================================= */

const reviewData = [

  {
    user: "Aoi",
    avatar: "A",
    anime: "シュタインズ・ゲート",
    score: 10,
    title: "後半から一気に意味が変わる",
    text:
      "前半で積み重ねた情報が後半につながっていく構成が印象的。初見と見返したときで見え方がかなり変わる作品。"
  },


  {
    user: "K",
    avatar: "K",
    anime: "サマータイムレンダ",
    score: 9,
    title: "伏線の回収が気持ちいい",
    text:
      "ループを利用した構成と島という舞台がうまく噛み合っている。テンポも速く、続きが気になる作品。"
  },


  {
    user: "Mio",
    avatar: "M",
    anime: "東のエデン",
    score: 9,
    title: "独特の世界観",
    text:
      "設定を少しずつ理解していくタイプの作品。社会的なテーマとミステリーの組み合わせが面白い。"
  }

];


/* =========================================================
   RANKING DATA
   ========================================================= */

const rankingData = [

  {
    rank: 1,
    title: "シュタインズ・ゲート",
    meta: "SF / ミステリー",
    score: "9.1",
    trend: "+12%"
  },


  {
    rank: 2,
    title: "魔法少女まどか☆マギカ",
    meta: "ダークファンタジー",
    score: "9.0",
    trend: "+13%"
  },


  {
    rank: 3,
    title: "無職転生 ～異世界行ったら本気だす～",
    meta: "異世界 / ファンタジー",
    score: "8.9",
    trend: "+16%"
  },


  {
    rank: 4,
    title: "Re:ゼロから始める異世界生活",
    meta: "異世界 / ダークファンタジー",
    score: "8.8",
    trend: "+11%"
  },


  {
    rank: 5,
    title: "青春ブタ野郎はバニーガール先輩の夢を見ない",
    meta: "青春 / SF",
    score: "8.8",
    trend: "+9%"
  },


  {
    rank: 6,
    title: "サマータイムレンダ",
    meta: "SF / ミステリー",
    score: "8.7",
    trend: "+19%"
  }

];


/* =========================================================
   STATE
   ========================================================= */

const state = {

  searchQuery: "",

  selectedAnime: null,

  currentModal: null,

  diagnosisStep: 0,

  diagnosisAnswers: [],

  likedReviews: new Set(),

  followedUsers: new Set(),

  watchlist: new Set(),

  favorites: new Set(),

  notInterested: new Set(),

  userRatings: {},

  notificationCount: 3

};


/* =========================================================
   DOM HELPERS
   ========================================================= */

function $(selector) {
  return document.querySelector(selector);
}


function $all(selector) {
  return document.querySelectorAll(selector);
}


/* =========================================================
   INITIALIZATION
   ========================================================= */

document.addEventListener("DOMContentLoaded", () => {

  renderRecommendations();

  renderDiscovery();

  renderRanking();

  renderReviews();

  setupTabs();

  setupKeyboardShortcuts();

});


/* =========================================================
   SCROLL
   ========================================================= */

function scrollToId(id) {

  const element = document.getElementById(id);

  if (!element) {
    return;
  }

  element.scrollIntoView({
    behavior: "smooth",
    block: "start"
  });

}


/* =========================================================
   ANIME CARD
   ========================================================= */

function createAnimeCard(anime) {

  const card = document.createElement("article");

  card.className = "card";

  card.onclick = () => {
    openAnime(anime.title);
  };


  const tags = anime.tags
    .slice(0, 3)
    .map(tag => `<span class="tag">${escapeHtml(tag)}</span>`)
    .join("");


  card.innerHTML = `

    <div
      class="cardImage"
      style="
        background:
          radial-gradient(
            circle at 75% 20%,
            ${getColor(anime.color)},
            transparent 40%
          ),
          linear-gradient(
            145deg,
            rgba(52,72,125,.75),
            rgba(10,16,29,.95)
          );
      "
    ></div>

    <div class="cardTop">

      <span class="badge">
        ${escapeHtml(anime.type)}
      </span>

      <span class="score">
        ★ ${anime.score}
      </span>

    </div>

    <div class="cardContent">

      <div class="tags">
        ${tags}
      </div>

      <h3>
        ${escapeHtml(anime.title)}
      </h3>

      <p>
        ${anime.year} / ${escapeHtml(anime.status)}
      </p>

    </div>

  `;

  return card;
}


/* =========================================================
   RECOMMENDATIONS
   ========================================================= */

function renderRecommendations() {

  const grid = $("#recGrid");

  if (!grid) {
    return;
  }

  const recommendations = [

    {
      title: "シュタインズ・ゲート",
      reason: "SF・伏線",
      match: "94%"
    },

    {
      title: "サマータイムレンダ",
      reason: "ループ・ミステリー",
      match: "92%"
    },

    {
      title: "魔法少女まどか☆マギカ",
      reason: "世界観・伏線",
      match: "90%"
    },

    {
      title: "東のエデン",
      reason: "オリジナル・謎",
      match: "88%"
    }

  ];


  grid.innerHTML = "";


  recommendations.forEach(item => {

    const anime = findAnime(item.title);

    if (!anime) {
      return;
    }

    const card = createAnimeCard(anime);

    card.querySelector(".cardContent")
      .insertAdjacentHTML(
        "beforeend",
        `
          <p
            style="
              color:#79dfff;
              margin-top:7px;
              font-weight:700
            "
          >
            ${item.match} 相性
          </p>

          <p>
            ${escapeHtml(item.reason)}
          </p>
        `
      );

    grid.appendChild(card);

  });

}


/* =========================================================
   DISCOVERY
   ========================================================= */

function renderDiscovery() {

  const grid = $("#discoverGrid");

  if (!grid) {
    return;
  }

  grid.innerHTML = "";


  const discoveryIds = [
    "AL00000003",
    "AL00000004",
    "AL00000010",
    "AL00000011"
  ];


  discoveryIds.forEach(id => {

    const anime = animeData.find(
      item => item.id === id
    );

    if (anime) {
      grid.appendChild(
        createAnimeCard(anime)
      );
    }

  });

}


/* =========================================================
   RANKING
   ========================================================= */

function renderRanking() {

  const list = $("#rankList");

  if (!list) {
    return;
  }

  list.innerHTML = "";


  rankingData.forEach(item => {

    const row = document.createElement("div");

    row.className = "rankItem";

    row.onclick = () => {
      openAnime(item.title);
    };


    row.innerHTML = `

      <div class="rankNo">
        ${item.rank}
      </div>

      <div class="rankTitle">

        <strong>
          ${escapeHtml(item.title)}
        </strong>

        <span>
          ${escapeHtml(item.meta)}
        </span>

      </div>

      <div class="rankScore">
        ★ ${item.score}
      </div>

      <div class="rankTrend">
        ${escapeHtml(item.trend)}
      </div>

    `;


    list.appendChild(row);

  });

}


/* =========================================================
   REVIEWS
   ========================================================= */

function renderReviews() {

  const feed = $("#reviewFeed");

  if (!feed) {
    return;
  }

  feed.innerHTML = "";


  reviewData.forEach((review, index) => {

    const item = document.createElement("article");

    item.className = "review";

    const liked =
      state.likedReviews.has(index);


    item.innerHTML = `

      <div class="reviewHeader">

        <div class="user">

          <div class="userAvatar">
            ${escapeHtml(review.avatar)}
          </div>

          <div>

            <div class="userName">
              ${escapeHtml(review.user)}
            </div>

            <div class="userSub">
              ${escapeHtml(review.anime)}
            </div>

          </div>

        </div>

        <div class="reviewScore">
          ★ ${review.score}/10
        </div>

      </div>


      <h4>
        ${escapeHtml(review.title)}
      </h4>


      <p>
        ${escapeHtml(review.text)}
      </p>


      <div class="reviewActions">

        <button
          onclick="likeReview(event, ${index})"
        >
          ${liked ? "♥" : "♡"} 役に立った
        </button>

        <button
          onclick="commentReview(event, ${index})"
        >
          コメント
        </button>

        <button
          onclick="shareReview(event, ${index})"
        >
          共有
        </button>

      </div>

    `;


    feed.appendChild(item);

  });

}


/* =========================================================
   REVIEW ACTIONS
   ========================================================= */

function likeReview(event, index) {

  event.stopPropagation();


  if (state.likedReviews.has(index)) {

    state.likedReviews.delete(index);

    toast("いいねを取り消しました");

  } else {

    state.likedReviews.add(index);

    toast("レビューにいいねしました");

  }


  renderReviews();

}


function commentReview(event, index) {

  event.stopPropagation();

  openModal(
    "comment",
    reviewData[index]
  );

}


function shareReview(event, index) {

  event.stopPropagation();

  const review = reviewData[index];

  if (
    navigator.clipboard &&
    navigator.clipboard.writeText
  ) {

    navigator.clipboard.writeText(
      `${review.anime} — ${review.title}`
    );

    toast("レビュー情報をコピーしました");

  } else {

    toast("共有機能を使用できます");

  }

}


/* =========================================================
   FIND ANIME
   ========================================================= */

function findAnime(title) {

  return animeData.find(
    anime =>
      anime.title === title ||
      anime.titleEn === title ||
      anime.id === title
  );

}


/* =========================================================
   OPEN ANIME
   ========================================================= */

function openAnime(title) {

  const anime = findAnime(title);

  if (!anime) {
    toast("作品が見つかりません");
    return;
  }


  state.selectedAnime = anime;


  openModal(
    "anime",
    anime
  );

}


/* =========================================================
   MODAL
   ========================================================= */

function openModal(type, data = null) {

  const modal = $("#modal");

  const content = $("#modalContent");

  if (!modal || !content) {
    return;
  }


  state.currentModal = type;


  let html = "";


  switch (type) {

    case "login":

      html = renderLoginModal();

      break;


    case "diagnosis":

      state.diagnosisStep = 0;
      state.diagnosisAnswers = [];

      html = renderDiagnosis();

      break;


    case "dna":

      html = renderDNAModal();

      break;


    case "rank":

      html = renderRankingModal();

      break;


    case "database":

      html = renderDatabaseModal();

      break;


    case "anime":

      html = renderAnimeModal(data);

      break;


    case "comment":

      html = renderCommentModal(data);

      break;


    default:

      html = `
        <h2>Anime Lively</h2>
        <p>コンテンツを表示できません。</p>
      `;

  }


  content.innerHTML = html;

  modal.classList.add("show");


  document.body.style.overflow = "hidden";

}


function closeModal() {

  const modal = $("#modal");

  if (!modal) {
    return;
  }

  modal.classList.remove("show");

  document.body.style.overflow = "";

  state.currentModal = null;

}


/* =========================================================
   LOGIN MODAL
   ========================================================= */

function renderLoginModal() {

  return `

    <div class="eyebrow">
      ACCOUNT
    </div>

    <h2>
      Anime Livelyにログイン
    </h2>

    <p>
      視聴履歴・評価・お気に入り・Anime DNAなどを
      保存できます。
    </p>


    <form
      class="loginForm"
      onsubmit="demoLogin(event)"
    >

      <label>
        メールアドレス
      </label>

      <input
        type="email"
        placeholder="example@example.com"
        required
      >


      <label>
        パスワード
      </label>

      <input
        type="password"
        placeholder="パスワード"
        required
      >


      <button
        class="primary"
        type="submit"
      >
        ログイン
      </button>

    </form>


    <div
      class="notice"
    >
      現在はデモ版です。実際の認証には
      Supabase Authなどのバックエンド接続が必要です。
    </div>

  `;

}


function demoLogin(event) {

  event.preventDefault();

  closeModal();

  toast("デモログインしました");

}


/* =========================================================
   DIAGNOSIS
   ========================================================= */

function renderDiagnosis() {

  const questions = [

    {
      title: "どんな作品に惹かれますか？",

      options: [
        "複雑な伏線・謎",
        "重厚な世界観",
        "キャラクターの成長",
        "感情を揺さぶる物語"
      ]

    },


    {
      title: "テンポは？",

      options: [
        "かなり速い",
        "普通",
        "じっくり",
        "作品による"
      ]

    },


    {
      title: "作品を選ぶとき重要なのは？",

      options: [
        "ストーリー",
        "世界観",
        "キャラクター",
        "設定"
      ]

    }

  ];


  const question =
    questions[state.diagnosisStep];


  if (!question) {

    return renderDiagnosisResult();

  }


  return `

    <div class="eyebrow">
      ANIME DIAGNOSIS
    </div>

    <h2>
      アニメ診断
    </h2>

    <p>
      ${state.diagnosisStep + 1}
      / ${questions.length}
    </p>


    <div class="diagnosis">

      <h3>
        ${question.title}
      </h3>

      ${question.options
        .map(
          option => `
            <button
              class="diagnosisOption"
              onclick="answerDiagnosis('${escapeAttribute(option)}')"
            >
              ${escapeHtml(option)}
            </button>
          `
        )
        .join("")}

    </div>

  `;

}


function answerDiagnosis(answer) {

  state.diagnosisAnswers.push(answer);

  state.diagnosisStep++;

  $("#modalContent").innerHTML =
    renderDiagnosis();

}


function renderDiagnosisResult() {

  return `

    <div class="eyebrow">
      RESULT
    </div>

    <h2>
      あなたのAnime DNAが完成しました
    </h2>

    <p>
      回答内容から、あなたは
      「ストーリー・世界観・設定」を重視する傾向が
      強いタイプとして分析されました。
    </p>


    <div class="notice">

      推定タイプ

      <br><br>

      <strong
        style="
          color:#83e2ff;
          font-size:20px
        "
      >
        STORY EXPLORER
      </strong>

    </div>


    <button
      class="primary"
      style="
        width:100%;
        margin-top:20px
      "
      onclick="
        closeModal();
        scrollToId('personal');
      "
    >
      おすすめを見る
    </button>

  `;

}


/* =========================================================
   DNA MODAL
   ========================================================= */

function renderDNAModal() {

  return `

    <div class="eyebrow">
      YOUR ANIME DNA
    </div>

    <h2>
      あなたのAnime DNA
    </h2>

    <p>
      現在の評価・視聴履歴・お気に入り・
      行動データなどから推定される嗜好です。
    </p>


    <div class="dna">

      ${createDNAValue("SF・科学", 92)}
      ${createDNAValue("ミステリー", 88)}
      ${createDNAValue("世界観", 86)}
      ${createDNAValue("シリアス", 79)}
      ${createDNAValue("感動", 76)}
      ${createDNAValue("ファンタジー", 72)}
      ${createDNAValue("コメディ", 54)}
      ${createDNAValue("日常", 29)}

    </div>


    <div class="notice">

      このデータは推薦精度を高めるために使用されます。
      他のユーザーに詳細な行動履歴を公開するものではありません。

    </div>

  `;

}


function createDNAValue(label, value) {

  return `

    <div class="barrow">

      <span>
        ${escapeHtml(label)}
      </span>

      <div class="bar">
        <i style="width:${value}%"></i>
      </div>

      <b>
        ${value}
      </b>

    </div>

  `;

}


/* =========================================================
   RANKING MODAL
   ========================================================= */

function renderRankingModal() {

  return `

    <div class="eyebrow">
      RANKING
    </div>

    <h2>
      Anime Livelyランキング
    </h2>

    <p>
      評価・人気・トレンドなどを分けて確認できます。
    </p>


    <div class="tabs">

      <button
        class="tab active"
      >
        総合
      </button>

      <button class="tab">
        人気
      </button>

      <button class="tab">
        トレンド
      </button>

      <button class="tab">
        コア人気
      </button>

      <button class="tab">
        レビュー数
      </button>

    </div>


    ${rankingData
      .map(
        item => `
          <div
            class="rankItem"
            onclick="closeModal();openAnime('${escapeAttribute(item.title)}')"
          >

            <div class="rankNo">
              ${item.rank}
            </div>

            <div class="rankTitle">

              <strong>
                ${escapeHtml(item.title)}
              </strong>

              <span>
                ${escapeHtml(item.meta)}
              </span>

            </div>

            <div class="rankScore">
              ★ ${item.score}
            </div>

            <div class="rankTrend">
              ${escapeHtml(item.trend)}
            </div>

          </div>
        `
      )
      .join("")}

  `;

}


/* =========================================================
   DATABASE MODAL
   ========================================================= */

function renderDatabaseModal() {

  return `

    <div class="eyebrow">
      DATABASE
    </div>

    <h2>
      Anime Lively Database
    </h2>

    <p>
      Anime Livelyでは、作品情報を独自IDで管理し、
      外部データとの同期・補完にも対応できる構成を想定しています。
    </p>


    <div class="grid">

      <div class="panel">

        <h3>
          作品
        </h3>

        <strong style="font-size:25px">
          24,861
        </strong>

      </div>


      <div class="panel">

        <h3>
          キャラクター
        </h3>

        <strong style="font-size:25px">
          180,420
        </strong>

      </div>


      <div class="panel">

        <h3>
          声優・スタッフ
        </h3>

        <strong style="font-size:25px">
          96,300+
        </strong>

      </div>


      <div class="panel">

        <h3>
          配信サービス
        </h3>

        <strong style="font-size:25px">
          12+
        </strong>

      </div>

    </div>


    <div class="notice">

      将来的には作品・人物・会社・原作・配信サービスを
      関係データとして接続し、
      「この作品を好きな人が好きな作品」などの
      推薦にも利用できます。

    </div>

  `;

}


/* =========================================================
   ANIME DETAIL MODAL
   ========================================================= */

function renderAnimeModal(anime) {

  if (!anime) {
    return `
      <h2>作品が見つかりません</h2>
    `;
  }


  const inWatchlist =
    state.watchlist.has(anime.id);


  const favorite =
    state.favorites.has(anime.id);


  const rating =
    state.userRatings[anime.id] || null;


  return `

    <div class="detailHero">


      <div
        class="detailPoster"
        style="
          background:
            radial-gradient(
              circle at 70% 20%,
              ${getColor(anime.color)},
              transparent 42%
            ),
            linear-gradient(
              145deg,
              #324a82,
              #10192d
            );
        "
      ></div>


      <div class="detailInfo">

        <div class="eyebrow">
          ${escapeHtml(anime.type)}
        </div>

        <h2>
          ${escapeHtml(anime.title)}
        </h2>

        <div
          style="
            color:#748299;
            font-size:12px
          "
        >
          ${escapeHtml(anime.titleEn)}
        </div>


        <div class="detailMeta">

          <span>
            ${anime.year}
          </span>

          <span>
            ${escapeHtml(anime.season)}
          </span>

          <span>
            全${anime.episodes}話
          </span>

          <span>
            ${escapeHtml(anime.status)}
          </span>

        </div>


        <div class="ratingBig">
          ★ ${anime.score}
        </div>

      </div>

    </div>


    <p>
      ${escapeHtml(anime.description)}
    </p>


    <div class="tags">

      ${anime.genres
        .map(
          genre =>
            `<span class="tag">${escapeHtml(genre)}</span>`
        )
        .join("")}

    </div>


    <h3>
      Anime Livelyから見た特徴
    </h3>

    <p>
      ${escapeHtml(anime.recommendationReason)}
    </p>


    <div class="notice">

      <b>
        推薦相性
      </b>

      <br>

      ${getMatchScore(anime)}%

    </div>


    <div
      class="actions"
      style="margin-top:20px"
    >

      <button
        class="primary"
        onclick="toggleWatchlist('${anime.id}')"
      >
        ${inWatchlist
          ? "視聴リストから削除"
          : "視聴リストに追加"}
      </button>


      <button
        class="secondary"
        onclick="toggleFavorite('${anime.id}')"
      >
        ${favorite
          ? "お気に入り解除"
          : "お気に入りに追加"}
      </button>


      <button
        class="secondary"
        onclick="rateAnime('${anime.id}')"
      >
        ${rating
          ? `評価 ${rating}/10`
          : "評価する"}
      </button>

    </div>


    <h3>
      視聴情報
    </h3>


    <div class="grid">

      <div class="panel">

        <h3>
          視聴状況
        </h3>

        <button
          class="secondary"
          onclick="setWatchStatus('${anime.id}','watching')"
        >
          視聴中
        </button>

        <button
          class="secondary"
          style="margin-top:8px"
          onclick="setWatchStatus('${anime.id}','completed')"
        >
          視聴済み
        </button>

      </div>


      <div class="panel">

        <h3>
          見る順番
        </h3>

        <button
          class="secondary"
          onclick="showWatchOrder('${anime.id}')"
        >
          推奨視聴順を見る
        </button>

      </div>

    </div>


    <h3>
      関連情報
    </h3>

    <div class="tags">

      <span class="tag">
        関連作品
      </span>

      <span class="tag">
        キャラクター
      </span>

      <span class="tag">
        声優
      </span>

      <span class="tag">
        スタッフ
      </span>

      <span class="tag">
        原作
      </span>

      <span class="tag">
        配信サービス
      </span>

      <span class="tag">
        エピソード
      </span>

    </div>

  `;

}


/* =========================================================
   COMMENT MODAL
   ========================================================= */

function renderCommentModal(review) {

  if (!review) {
    return "";
  }


  return `

    <div class="eyebrow">
      COMMENT
    </div>

    <h2>
      レビューにコメント
    </h2>

    <p>
      ${escapeHtml(review.title)}
    </p>


    <form
      class="loginForm"
      onsubmit="submitComment(event)"
    >

      <textarea
        rows="5"
        placeholder="コメントを入力してください"
        required
      ></textarea>


      <button
        class="primary"
        type="submit"
      >
        コメントする
      </button>

    </form>

  `;

}


function submitComment(event) {

  event.preventDefault();

  closeModal();

  toast("コメントを投稿しました");

}


/* =========================================================
   WATCHLIST
   ========================================================= */

function toggleWatchlist(id) {

  if (state.watchlist.has(id)) {

    state.watchlist.delete(id);

    toast("視聴リストから削除しました");

  } else {

    state.watchlist.add(id);

    toast("視聴リストに追加しました");

  }


  if (state.selectedAnime) {

    openAnime(
      state.selectedAnime.id
    );

  }

}


/* =========================================================
   FAVORITES
   ========================================================= */

function toggleFavorite(id) {

  if (state.favorites.has(id)) {

    state.favorites.delete(id);

    toast("お気に入りから削除しました");

  } else {

    state.favorites.add(id);

    toast("お気に入りに追加しました");

  }


  if (state.selectedAnime) {

    openAnime(
      state.selectedAnime.id
    );

  }

}


/* =========================================================
   RATING
   ========================================================= */

function rateAnime(id) {

  const value =
    prompt(
      "この作品を1〜10で評価してください",
      state.userRatings[id] || ""
    );


  if (value === null) {
    return;
  }


  const score =
    Number(value);


  if (
    !Number.isInteger(score) ||
    score < 1 ||
    score > 10
  ) {

    toast("1〜10の整数で入力してください");

    return;

  }


  state.userRatings[id] = score;

  toast(`★ ${score}で評価しました`);


  if (state.selectedAnime) {
    openAnime(state.selectedAnime.id);
  }

}


/* =========================================================
   WATCH STATUS
   ========================================================= */

function setWatchStatus(id, status) {

  const anime = findAnime(id);

  if (!anime) {
    return;
  }


  let message = "";


  switch (status) {

    case "watching":
      message = "視聴中に設定しました";
      break;

    case "completed":
      message = "視聴済みに設定しました";
      break;

    case "planned":
      message = "視聴予定に設定しました";
      break;

    case "dropped":
      message = "視聴中止に設定しました";
      break;

    default:
      message = "視聴状況を更新しました";

  }


  toast(message);

}


/* =========================================================
   WATCH ORDER
   ========================================================= */

function showWatchOrder(id) {

  const anime = findAnime(id);

  if (!anime) {
    return;
  }


  const related = animeData
    .filter(item =>
      item.genres.some(
        genre =>
          anime.genres.includes(genre)
      )
    )
    .slice(0, 4);


  openModal(
    "database",
    {
      title: anime.title,
      related
    }
  );


  $("#modalContent").innerHTML = `

    <div class="eyebrow">
      WATCH ORDER
    </div>

    <h2>
      ${escapeHtml(anime.title)}
    </h2>

    <p>
      Anime Lively推奨の視聴順
    </p>


    <div class="notice">

      <b>
        1. 本編
      </b>

      <br>

      TVシリーズを放送順に視聴

    </div>


    <div class="notice">

      <b>
        2. 関連作品
      </b>

      <br>

      外伝・劇場版・続編がある場合は、
      本編との関係を確認して視聴

    </div>


    <div class="notice">

      <b>
        3. 補足作品
      </b>

      <br>

      原作・OVA・特典映像などを必要に応じて確認

    </div>

  `;

}


/* =========================================================
   SEARCH
   ========================================================= */

function searchSite(query) {

  state.searchQuery =
    query.trim().toLowerCase();


  removeSearchResults();


  if (!state.searchQuery) {
    return;
  }


  const results =
    animeData.filter(anime => {

      const text = [

        anime.title,

        anime.titleEn,

        anime.description,

        ...anime.genres,

        ...anime.tags

      ]
        .join(" ")
        .toLowerCase();


      return text.includes(
        state.searchQuery
      );

    });


  showSearchResults(results);

}


/* =========================================================
   SEARCH RESULTS
   ========================================================= */

function showSearchResults(results) {

  let box =
    document.getElementById(
      "searchResults"
    );


  if (!box) {

    box =
      document.createElement("div");

    box.id =
      "searchResults";

    box.className =
      "searchResults";

    document.body.appendChild(box);

  }


  if (!results.length) {

    box.innerHTML = `
      <div class="empty">
        該当する作品が見つかりません。
      </div>
    `;

  } else {

    box.innerHTML =
      results
        .slice(0, 8)
        .map(
          anime => `

            <div
              class="searchResult"
              onclick="
                openAnime('${escapeAttribute(anime.id)}');
                removeSearchResults();
              "
            >

              <strong>
                ${escapeHtml(anime.title)}
              </strong>

              <span>
                ${anime.year}
                ・
                ${escapeHtml(anime.genres.join(" / "))}
              </span>

            </div>

          `
        )
        .join("");

  }


  box.classList.add("show");

}


function removeSearchResults() {

  const box =
    document.getElementById(
      "searchResults"
    );


  if (box) {
    box.classList.remove("show");
  }

}


/* =========================================================
   TABS
   ========================================================= */

function setupTabs() {

  $all(".tab").forEach(tab => {

    tab.addEventListener(
      "click",
      () => {

        const parent =
          tab.parentElement;


        parent
          .querySelectorAll(".tab")
          .forEach(item =>
            item.classList.remove("active")
          );


        tab.classList.add("active");


        toast(
          `${tab.textContent.trim()}を表示しています`
        );

      }
    );

  });

}


/* =========================================================
   KEYBOARD
   ========================================================= */

function setupKeyboardShortcuts() {

  document.addEventListener(
    "keydown",
    event => {

      if (event.key === "Escape") {

        closeModal();

        removeSearchResults();

      }


      if (
        event.key === "/" &&
        document.activeElement.tagName !== "INPUT" &&
        document.activeElement.tagName !== "TEXTAREA"
      ) {

        event.preventDefault();

        const search =
          $("#search");

        if (search) {

          search.focus();

        }

      }

    }
  );


  document.addEventListener(
    "click",
    event => {

      const search =
        $(".search");


      const results =
        $("#searchResults");


      if (
        results &&
        search &&
        !search.contains(event.target) &&
        !results.contains(event.target)
      ) {

        removeSearchResults();

      }

    }
  );


  const modal =
    $("#modal");


  if (modal) {

    modal.addEventListener(
      "click",
      event => {

        if (
          event.target === modal
        ) {

          closeModal();

        }

      }
    );

  }

}


/* =========================================================
   TOAST
   ========================================================= */

let toastTimer = null;


function toast(message) {

  const element =
    $("#toast");


  if (!element) {
    return;
  }


  element.textContent =
    message;


  element.classList.add(
    "show"
  );


  clearTimeout(
    toastTimer
  );


  toastTimer =
    setTimeout(
      () => {

        element.classList.remove(
          "show"
        );

      },
      2200
    );

}


/* =========================================================
   MATCH SCORE
   ========================================================= */

function getMatchScore(anime) {

  const scores = {

    "シュタインズ・ゲート": 94,

    "サマータイムレンダ": 92,

    "魔法少女まどか☆マギカ": 90,

    "東のエデン": 88,

    "Re:ゼロから始める異世界生活": 87,

    "無職転生 ～異世界行ったら本気だす～": 85,

    "青春ブタ野郎はバニーガール先輩の夢を見ない": 84,

    "ノーゲーム・ノーライフ": 82,

    "ロクでなし魔術講師と禁忌教典": 81,

    "プラスティック・メモリーズ": 79,

    "Angel Beats!": 77,

    "この素晴らしい世界に祝福を！": 74

  };


  return scores[anime.title] || 70;

}


/* =========================================================
   COLOR
   ========================================================= */

function getColor(name) {

  const colors = {

    blue:
      "rgba(88,126,255,.55)",

    cyan:
      "rgba(68,222,255,.55)",

    purple:
      "rgba(161,99,255,.55)",

    green:
      "rgba(73,221,154,.55)",

    red:
      "rgba(255,93,116,.55)",

    orange:
      "rgba(255,161,82,.55)",

    pink:
      "rgba(255,103,191,.55)",

    gold:
      "rgba(255,211,91,.55)"

  };


  return (
    colors[name] ||
    "rgba(100,150,255,.55)"
  );

}


/* =========================================================
   ESCAPE HTML
   ========================================================= */

function escapeHtml(value) {

  return String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");

}


/* =========================================================
   ESCAPE ATTRIBUTE
   ========================================================= */

function escapeAttribute(value) {

  return String(value)
    .replaceAll("\\", "\\\\")
    .replaceAll("'", "\\'")
    .replaceAll('"', "&quot;");

}


/* =========================================================
   GLOBAL API
   ========================================================= */

window.AnimeLively = {

  animeData,

  reviewData,

  rankingData,

  state,

  findAnime,

  openAnime,

  openModal,

  closeModal,

  searchSite,

  scrollToId,

  toast,

  toggleWatchlist,

  toggleFavorite,

  rateAnime,

  setWatchStatus

};


/* =========================================================
   END
   ========================================================= */
