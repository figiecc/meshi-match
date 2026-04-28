let me = {
  id: "me",
  name: "カイ"
};

let friends = [
  { id: "partner", name: "相手", note: "一緒に行く頻度が高いフレンド" },
  { id: "friend_a", name: "友達A", note: "がっつり系に寄りがちなフレンド" },
  { id: "friend_b", name: "友達B", note: "カフェ・軽めが好きなフレンド" }
];

let stores = [
  { id: "ramen_hoshitomoshi", name: "麺屋 星灯", genre: "ラーメン", price: "¥¥", distance: "徒歩6分", rating: "★4.2", status: "営業中", emoji: "🍜", description: "濃い味で一気に満たしたい日に。疲労回復という名の塩分補給。", tags: ["がっつり", "一人向け", "濃い味"] },
  { id: "curry_namaste", name: "ナマステ食堂", genre: "インドカレー", price: "¥¥", distance: "徒歩8分", rating: "★4.1", status: "営業中", emoji: "🍛", description: "ナンで気分を立て直すタイプの昼夜兼用候補。", tags: ["がっつり", "友達向け", "スパイス"] },
  { id: "teishoku_yorimichi", name: "よりみち定食", genre: "定食", price: "¥", distance: "徒歩5分", rating: "★4.0", status: "営業中", emoji: "🍱", description: "普通にちゃんと食べたい日の安定択。派手さより勝率。", tags: ["安め", "健康寄り", "一人向け"] },
  { id: "sushi_aoi", name: "鮨 あおい", genre: "寿司", price: "¥¥¥", distance: "徒歩14分", rating: "★4.4", status: "営業中", emoji: "🍣", description: "少し良いものを食べたい時のご褒美候補。", tags: ["デート", "ご褒美", "軽め"] },
  { id: "burger_labo", name: "Burger Labo", genre: "ハンバーガー", price: "¥¥", distance: "徒歩9分", rating: "★4.3", status: "営業中", emoji: "🍔", description: "考えるのをやめて、肉とパンに任せる日。", tags: ["がっつり", "友達向け", "ジャンク"] },
  { id: "pasta_luna", name: "Pasta Luna", genre: "イタリアン", price: "¥¥", distance: "徒歩11分", rating: "★4.0", status: "営業中", emoji: "🍝", description: "会話もしやすい、無難に強い洋食カード。", tags: ["デート", "友達向け", "普通"] },
  { id: "udon_maru", name: "うどん丸", genre: "うどん", price: "¥", distance: "徒歩4分", rating: "★3.9", status: "営業中", emoji: "🍲", description: "軽く済ませたいけど、ちゃんと温かいものが欲しい時に。", tags: ["安め", "軽め", "近め"] },
  { id: "yakiniku_tora", name: "焼肉とら", genre: "焼肉", price: "¥¥¥", distance: "徒歩16分", rating: "★4.5", status: "営業中", emoji: "🥩", description: "今日は決めに行く日。財布とは後で会議。", tags: ["がっつり", "友達向け", "ご褒美"] },
  { id: "korean_seoul", name: "ソウルキッチン", genre: "韓国料理", price: "¥¥", distance: "徒歩10分", rating: "★4.2", status: "営業中", emoji: "🌶️", description: "辛いものでテンションを上げたい時の候補。", tags: ["辛い", "友達向け", "がっつり"] },
  { id: "cafe_mellow", name: "Cafe Mellow", genre: "カフェ", price: "¥¥", distance: "徒歩7分", rating: "★4.1", status: "営業中", emoji: "☕", description: "食事も会話も軽めにしたい時の安全地帯。", tags: ["デート", "軽め", "ゆっくり"] },
  { id: "gyudon_hayai", name: "牛丼はやい", genre: "牛丼", price: "¥", distance: "徒歩3分", rating: "★3.8", status: "営業中", emoji: "🍚", description: "速い、安い、強い。意思決定のショートカット。", tags: ["安め", "近め", "一人向け"] },
  { id: "pizza_craft", name: "Pizza Craft", genre: "ピザ", price: "¥¥", distance: "徒歩13分", rating: "★4.2", status: "営業中", emoji: "🍕", description: "分けやすく、外しにくい。グループ向けの堅実案。", tags: ["友達向け", "シェア", "普通"] },
  { id: "tonkatsu_katsuya", name: "とんかつ勝屋", genre: "とんかつ", price: "¥¥", distance: "徒歩12分", rating: "★4.0", status: "営業中", emoji: "🥢", description: "空腹に正面から答える、重めの一撃。", tags: ["がっつり", "一人向け", "和食"] },
  { id: "thai_sabai", name: "Thai Sabai", genre: "タイ料理", price: "¥¥", distance: "徒歩15分", rating: "★4.3", status: "営業中", emoji: "🥘", description: "いつもと違うものを食べたい時の変化球。", tags: ["スパイス", "友達向け", "変化球"] },
  { id: "soba_kiraku", name: "そば喜楽", genre: "そば", price: "¥", distance: "徒歩6分", rating: "★3.9", status: "営業中", emoji: "🍜", description: "重すぎない、でもちゃんと食べた感が欲しい時に。", tags: ["軽め", "安め", "和食"] },
  { id: "omurice_eggs", name: "オムライス食堂 Eggs", genre: "洋食", price: "¥¥", distance: "徒歩9分", rating: "★4.1", status: "営業中", emoji: "🍳", description: "優しい味で丸く収めたい日の候補。", tags: ["普通", "デート", "洋食"] },
  { id: "izakaya_komachi", name: "こまち酒場", genre: "居酒屋", price: "¥¥", distance: "徒歩10分", rating: "★4.0", status: "営業中", emoji: "🍻", description: "食事も少し飲みも、という時の柔軟枠。", tags: ["友達向け", "飲み", "夜向き"] },
  { id: "salad_green", name: "GREEN BOWL", genre: "サラダ", price: "¥¥", distance: "徒歩8分", rating: "★4.1", status: "営業中", emoji: "🥗", description: "胃に優しく、罪悪感も軽い。たまには賢い選択。", tags: ["軽め", "健康寄り", "デート"] },
  { id: "karaage_ippin", name: "からあげ一品", genre: "唐揚げ", price: "¥", distance: "徒歩7分", rating: "★4.0", status: "営業中", emoji: "🍗", description: "揚げ物の説得力。細かい議論を終わらせる味。", tags: ["がっつり", "安め", "一人向け"] },
  { id: "dessert_milk", name: "MILK SWEETS", genre: "スイーツ", price: "¥¥", distance: "徒歩11分", rating: "★4.4", status: "営業中", emoji: "🍰", description: "食事というより、今日は甘いものが主役の日。", tags: ["デート", "軽め", "甘い"] }
];

const initialFriendLikes = {
  partner: {
    ramen_hoshitomoshi: "like",
    sushi_aoi: "like",
    pasta_luna: "like",
    cafe_mellow: "like",
    salad_green: "like",
    dessert_milk: "like",
    yakiniku_tora: "nope",
    gyudon_hayai: "nope"
  },
  friend_a: {
    ramen_hoshitomoshi: "like",
    curry_namaste: "like",
    burger_labo: "like",
    yakiniku_tora: "like",
    korean_seoul: "like",
    karaage_ippin: "like",
    tonkatsu_katsuya: "like"
  },
  friend_b: {
    cafe_mellow: "like",
    salad_green: "like",
    dessert_milk: "like",
    udon_maru: "like",
    soba_kiraku: "like",
    omurice_eggs: "like",
    pasta_luna: "like"
  }
};

const notices = [
  {
    date: "2026/04/29",
    title: "v0.34：現在地1km圏内の店舗取得",
    body: "現在地から半径1km以内の飲食店をOpenStreetMap / Overpass APIから取得できるようにしました。取得結果は6時間キャッシュします。",
    unread: true
  },
  {
    date: "2026/04/29",
    title: "v0.33：店舗手動追加削除",
    body: "店舗の手動追加・編集UIを削除し、周辺店舗の自動取得を前提に整理しました。"
  },
  {
    date: "2026/04/29",
    title: "v0.32：店舗データ追加・編集",
    body: "起動直後のスワイプ不具合とボタン反応を修正し、店舗データ追加・編集UIを追加しました。"
  },
  {
    date: "2026/04/29",
    title: "v0.31：PWA自動更新強化",
    body: "ホーム画面に追加し直さなくても、アプリ起動時に最新版へ更新されやすいようにしました。"
  },
  {
    date: "2026/04/29",
    title: "v0.30：スワイプ操作修正",
    body: "未判定を見終わった後の戻り動作と、スマホのスワイプ操作を修正しました。"
  }
];

const STORAGE_KEY = "meshi_match_v27_state";

const state = {
  index: 0,
  swipeQueue: [],
  selectedFriendId: "partner",
  myAnswers: {},
  friendAnswers: initialFriendLikes,
  historyStack: [],
  decidedStoreId: null,
  displayName: "カイ",
  noticeSeen: false,
  customFriends: [],
  friendRequests: [
    { id: "req_mina", name: "みな", code: "MESHI-MINA-2201" },
    { id: "req_sora", name: "そら", code: "MESHI-SORA-8190" }
  ],
  friendSearchQuery: "",
  likeSearchQuery: "",
  blockFriendRequests: false,
  activeFilter: "all",
  historyView: "like",
  detailStoreId: null,
  inlineReswipeActive: false,
  inlineReswipeQueue: [],
  inlineReswipeIndex: 0,
  inlineReswipeLabel: "",
  inlineReswipeHistory: [],

  // v0.23 account-ready structure
  currentUserId: "user_kai",
  users: {
    user_kai: { id: "user_kai", displayName: "カイ", friendCode: "MESHI-KAI-0428" }
  },
  reactionsByUser: {},
  friendshipsByUser: {},
  friendRequestsByUser: {},
  settingsByUser: {},
  decisionHistoryByUser: {},
  visitStatusByUser: {},
  customStores: [],
  editingStoreId: null,
  nearbyStores: [],
  nearbyCache: null,
  nearbyFetching: false
};

const $ = (id) => document.getElementById(id);
const screens = [
  "homeScreen", "friendsScreen", "swipeScreen", "friendDetailScreen", "myLikesScreen",
  "noticeScreen", "settingsScreen", "doneScreen"
];

function saveState() {
  syncAccountFromLegacy();
  localStorage.setItem(STORAGE_KEY, JSON.stringify({
    index: state.index,
    swipeQueue: state.swipeQueue,
    selectedFriendId: state.selectedFriendId,
    myAnswers: state.myAnswers,
    friendAnswers: state.friendAnswers,
    historyStack: state.historyStack,
    decidedStoreId: state.decidedStoreId,
    displayName: state.displayName,
    noticeSeen: state.noticeSeen,
    customFriends: state.customFriends,
    friendRequests: state.friendRequests,
    friendSearchQuery: state.friendSearchQuery,
    likeSearchQuery: state.likeSearchQuery,
    blockFriendRequests: state.blockFriendRequests,
    activeFilter: state.activeFilter,
    historyView: state.historyView,
    detailStoreId: state.detailStoreId,
    inlineReswipeActive: state.inlineReswipeActive,
    inlineReswipeQueue: state.inlineReswipeQueue,
    inlineReswipeIndex: state.inlineReswipeIndex,
    inlineReswipeLabel: state.inlineReswipeLabel,
    inlineReswipeHistory: state.inlineReswipeHistory,
    currentUserId: state.currentUserId,
    users: state.users,
    reactionsByUser: state.reactionsByUser,
    friendshipsByUser: state.friendshipsByUser,
    friendRequestsByUser: state.friendRequestsByUser,
    settingsByUser: state.settingsByUser,
    decisionHistoryByUser: state.decisionHistoryByUser,
    visitStatusByUser: state.visitStatusByUser,
    customStores: state.customStores,
    nearbyStores: state.nearbyStores,
    nearbyCache: state.nearbyCache
  }));
}

function loadState() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return;
    const saved = JSON.parse(raw);
    if (!saved || (!saved.myAnswers && !saved.reactionsByUser)) return;
    Object.assign(state, saved);
    state.friendAnswers = { ...initialFriendLikes, ...(saved.friendAnswers || {}) };
    state.customFriends = saved.customFriends || [];
    state.friendRequests = saved.friendRequests || state.friendRequests || [];
    state.friendSearchQuery = saved.friendSearchQuery || "";
    state.likeSearchQuery = saved.likeSearchQuery || "";
    state.blockFriendRequests = !!saved.blockFriendRequests;
    state.activeFilter = saved.activeFilter || "all";
    state.historyView = saved.historyView || "like";
    state.detailStoreId = saved.detailStoreId || null;
    state.inlineReswipeActive = !!saved.inlineReswipeActive;
    state.inlineReswipeQueue = saved.inlineReswipeQueue || [];
    state.inlineReswipeIndex = saved.inlineReswipeIndex || 0;
    state.inlineReswipeLabel = saved.inlineReswipeLabel || "";
    state.inlineReswipeHistory = saved.inlineReswipeHistory || [];
    ensureAccountData();
    applyAccountToLegacy();
  } catch {
    localStorage.removeItem(STORAGE_KEY);
  }
}

function showScreen(id) {
  document.querySelectorAll(".screen").forEach((screen) => {
    screen.classList.toggle("active", screen.id === id);
  });
}

function getFriend(friendId = state.selectedFriendId) {
  return friends.find(friend => friend.id === friendId) || friends[0];
}

const baseStoreIds = new Set(stores.map(store => store.id));

function mergeCustomStores() {
  // v0.34: 手動追加店舗は廃止。周辺取得店舗をスワイプ候補に混ぜる。
  stores = stores.filter(store => baseStoreIds.has(store.id));
  (state.nearbyStores || []).forEach(nearbyStore => {
    const index = stores.findIndex(store => store.id === nearbyStore.id);
    if (index >= 0) stores[index] = nearbyStore;
    else stores.push(nearbyStore);
  });
}

function readStoreForm() {
  const name = ($("storeNameInput")?.value || "").trim();
  const genre = ($("storeGenreInput")?.value || "").trim() || "その他";
  const emoji = ($("storeEmojiInput")?.value || "").trim() || "🍽️";
  const distance = ($("storeDistanceInput")?.value || "").trim() || "距離未設定";
  const price = ($("storePriceInput")?.value || "").trim() || "¥?";
  const rating = ($("storeRatingInput")?.value || "").trim() || "★-";
  const status = ($("storeStatusInput")?.value || "").trim() || "未確認";
  const description = ($("storeDescriptionInput")?.value || "").trim() || "手動で追加したお店です。";
  const tags = ($("storeTagsInput")?.value || "")
    .split(",")
    .map(tag => tag.trim())
    .filter(Boolean);

  if (!name) {
    showToast("店名を入力してください");
    return null;
  }

  if (!tags.length) tags.push(genre);

  return {
    id: state.editingStoreId || `custom_store_${Date.now()}`,
    name,
    genre,
    emoji,
    distance,
    price,
    rating,
    status,
    description,
    tags,
    custom: true
  };
}

function fillStoreForm(store) {
  state.editingStoreId = store.id;
  $("storeNameInput").value = store.name || "";
  $("storeGenreInput").value = store.genre || "";
  $("storeEmojiInput").value = store.emoji || "";
  $("storeDistanceInput").value = store.distance || "";
  $("storePriceInput").value = store.price || "";
  $("storeRatingInput").value = store.rating || "";
  $("storeStatusInput").value = store.status || "";
  $("storeDescriptionInput").value = store.description || "";
  $("storeTagsInput").value = (store.tags || []).join(", ");
}

function clearStoreForm() {}

function saveCustomStore() { showToast("手動追加は削除しました"); }

function deleteCustomStore(storeId) { showToast("手動追加は削除しました"); }

function renderStoreManagerList() {}

function openStoreManager() { showToast("店舗データは周辺から自動取得する方針です"); }

function closeStoreManager() {}

const NEARBY_RADIUS_METERS = 1000;
const NEARBY_CACHE_MS = 6 * 60 * 60 * 1000;
const NEARBY_REUSE_DISTANCE_METERS = 300;
const NEARBY_LIMIT = 30;

function setNearbyStatus(text) {
  const el = $("nearbyStatusText");
  if (el) el.textContent = text;
}

function distanceMeters(lat1, lon1, lat2, lon2) {
  const R = 6371000;
  const toRad = value => value * Math.PI / 180;
  const dLat = toRad(lat2 - lat1);
  const dLon = toRad(lon2 - lon1);
  const a =
    Math.sin(dLat / 2) ** 2 +
    Math.cos(toRad(lat1)) * Math.cos(toRad(lat2)) *
    Math.sin(dLon / 2) ** 2;
  return 2 * R * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
}

function getCurrentPosition() {
  return new Promise((resolve, reject) => {
    if (!navigator.geolocation) {
      reject(new Error("位置情報に対応していません"));
      return;
    }

    navigator.geolocation.getCurrentPosition(resolve, reject, {
      enableHighAccuracy: false,
      timeout: 12000,
      maximumAge: 5 * 60 * 1000
    });
  });
}

function canUseNearbyCache(lat, lon) {
  const cache = state.nearbyCache;
  if (!cache || !cache.timestamp || !cache.lat || !cache.lon || !Array.isArray(cache.stores)) return false;

  const age = Date.now() - cache.timestamp;
  if (age > NEARBY_CACHE_MS) return false;

  const moved = distanceMeters(lat, lon, cache.lat, cache.lon);
  return moved <= NEARBY_REUSE_DISTANCE_METERS;
}

function osmAmenityToGenre(amenity) {
  if (amenity === "cafe") return "カフェ";
  if (amenity === "fast_food") return "ファストフード";
  if (amenity === "bar") return "バー";
  if (amenity === "pub") return "パブ";
  return "レストラン";
}

function osmAmenityToEmoji(amenity) {
  if (amenity === "cafe") return "☕";
  if (amenity === "fast_food") return "🍔";
  if (amenity === "bar") return "🍸";
  if (amenity === "pub") return "🍺";
  return "🍽️";
}

function buildOverpassQuery(lat, lon) {
  return `
[out:json][timeout:15];
(
  node["amenity"~"^(restaurant|cafe|fast_food|bar|pub)$"](around:${NEARBY_RADIUS_METERS},${lat},${lon});
  way["amenity"~"^(restaurant|cafe|fast_food|bar|pub)$"](around:${NEARBY_RADIUS_METERS},${lat},${lon});
  relation["amenity"~"^(restaurant|cafe|fast_food|bar|pub)$"](around:${NEARBY_RADIUS_METERS},${lat},${lon});
);
out center ${NEARBY_LIMIT};
`;
}

function normalizeOsmStore(element, originLat, originLon) {
  const tags = element.tags || {};
  const lat = element.lat || element.center?.lat;
  const lon = element.lon || element.center?.lon;
  if (!lat || !lon) return null;

  const name = tags.name || tags["name:ja"] || tags["name:en"];
  if (!name) return null;

  const amenity = tags.amenity || "restaurant";
  const genre = osmAmenityToGenre(amenity);
  const distance = Math.round(distanceMeters(originLat, originLon, lat, lon));
  const cuisine = tags.cuisine ? String(tags.cuisine).split(";").slice(0, 2) : [];
  const opening = tags.opening_hours ? "営業時間情報あり" : "営業未確認";

  return {
    id: `osm_${element.type}_${element.id}`,
    name,
    genre,
    emoji: osmAmenityToEmoji(amenity),
    distance: distance < 1000 ? `約${distance}m` : `約${(distance / 1000).toFixed(1)}km`,
    price: "価格未取得",
    rating: "評価未取得",
    status: opening,
    description: `現在地から${distance < 1000 ? `約${distance}m` : `約${(distance / 1000).toFixed(1)}km`}の${genre}です。OpenStreetMapのデータをもとに表示しています。`,
    tags: [genre, ...cuisine, "周辺取得"].slice(0, 5),
    lat,
    lon,
    source: "openstreetmap"
  };
}

async function fetchNearbyStores(force = false) {
  if (state.nearbyFetching) return;

  const button = $("fetchNearbyBtn");
  state.nearbyFetching = true;
  if (button) {
    button.disabled = true;
    button.textContent = "取得中";
  }

  try {
    setNearbyStatus("現在地を取得しています");
    const position = await getCurrentPosition();
    const lat = position.coords.latitude;
    const lon = position.coords.longitude;

    if (!force && canUseNearbyCache(lat, lon)) {
      state.nearbyStores = state.nearbyCache.stores;
      mergeCustomStores();
      setNearbyStatus(`キャッシュから${state.nearbyStores.length}件を表示中`);
      resetSwipeQueueToUnanswered();
      saveState();
      return;
    }

    setNearbyStatus("周辺店舗を取得しています");
    const query = buildOverpassQuery(lat, lon);
    const url = "https://overpass-api.de/api/interpreter";

    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "text/plain;charset=UTF-8"
      },
      body: query
    });

    if (!response.ok) throw new Error(`Overpass error: ${response.status}`);

    const data = await response.json();
    const normalized = (data.elements || [])
      .map(element => normalizeOsmStore(element, lat, lon))
      .filter(Boolean)
      .sort((a, b) => {
        const da = a.distance.includes("km") ? parseFloat(a.distance.replace("約", "")) * 1000 : parseInt(a.distance.replace(/\D/g, ""), 10);
        const db = b.distance.includes("km") ? parseFloat(b.distance.replace("約", "")) * 1000 : parseInt(b.distance.replace(/\D/g, ""), 10);
        return da - db;
      })
      .slice(0, NEARBY_LIMIT);

    if (!normalized.length) {
      throw new Error("周辺店舗が見つかりませんでした");
    }

    state.nearbyStores = normalized;
    state.nearbyCache = {
      timestamp: Date.now(),
      lat,
      lon,
      radius: NEARBY_RADIUS_METERS,
      stores: normalized
    };

    mergeCustomStores();
    resetSwipeQueueToUnanswered();
    saveState();
    setNearbyStatus(`現在地1km以内から${normalized.length}件を取得`);
    showToast("周辺店舗を取得しました");
  } catch (error) {
    console.error(error);
    setNearbyStatus("取得できませんでした。サンプル店舗で動作中");
    showToast("周辺店舗の取得に失敗しました");
  } finally {
    state.nearbyFetching = false;
    if (button) {
      button.disabled = false;
      button.textContent = "周辺取得";
    }
  }
}

function resetSwipeQueueToUnanswered() {
  const unanswered = getUnansweredStores();
  state.swipeQueue = unanswered.map(store => store.id);
  state.index = 0;
  state.historyStack = [];

  if (!state.swipeQueue.length) {
    showScreen("doneScreen");
    setActiveNav("swipeScreen");
    return;
  }

  showScreen("swipeScreen");
  setActiveNav("swipeScreen");
  renderCard();
}

function getStore(storeId) {
  return stores.find(store => store.id === storeId);
}

function countLikes(answerMap) {
  return Object.values(answerMap || {}).filter(value => value === "like" || value === "superlike").length;
}

function storeMatchesFilter(store, filter = state.activeFilter) {
  if (!filter || filter === "all") return true;
  if (filter === "カフェ") return store.genre === "カフェ" || store.tags.includes("カフェ") || store.tags.includes("ゆっくり");
  return store.genre === filter || store.tags.includes(filter);
}

function getFilteredStores() {
  return stores.filter(store => storeMatchesFilter(store));
}

function getUnansweredStores() {
  return getFilteredStores().filter(store => !state.myAnswers[store.id]);
}

function friendLikeNamesForStore(storeId) {
  return friends
    .filter(friend => state.friendAnswers[friend.id]?.[storeId] === "like")
    .map(friend => friend.name);
}

function forceHome() {
  syncMoodFilterUI();
  syncHistoryTabs();
  openSwipeTab();
}

function setActiveNav(target) {
  const navMap = {
    friendsScreen: "navFriendsBtn",
    swipeScreen: "navSwipeBtn",
    myLikesScreen: "navLikesBtn"
  };

  ["navFriendsBtn", "navSwipeBtn", "navLikesBtn"].forEach(id => {
    const btn = $(id);
    if (btn) btn.classList.toggle("active", navMap[target] === id);
  });
}

function closeAllModals() {
  const noticeModal = $("noticeModal");
  const settingsModal = $("settingsModal");
  const friendAddModal = $("friendAddModal");
  const storeDetailModal = $("storeDetailModal");
  const storeManagerModal = $("storeManagerModal");
  if (noticeModal) noticeModal.classList.add("hidden");
  if (settingsModal) settingsModal.classList.add("hidden");
  if (friendAddModal) friendAddModal.classList.add("hidden");
  if (storeDetailModal) storeDetailModal.classList.add("hidden");
  if (storeManagerModal) storeManagerModal.classList.add("hidden");
  document.body.classList.remove("modal-open");
}

function scrollAppTop() {
  window.scrollTo({ top: 0, behavior: "smooth" });
}

function showHomeTab() {
  forceHome();
}

function openSwipeTab() {
  closeAllModals();
  syncMoodFilterUI();
  mergeCustomStores();

  if (!state.activeFilter) state.activeFilter = "all";

  const queueInvalid = !state.swipeQueue || !state.swipeQueue.length || state.index >= state.swipeQueue.length;
  if (queueInvalid) {
    const unanswered = getUnansweredStores();
    state.swipeQueue = unanswered.map(store => store.id);
    state.index = 0;
    state.historyStack = [];
  }

  saveState();
  setActiveNav("swipeScreen");

  if (!state.swipeQueue.length) {
    showScreen("doneScreen");
  } else {
    showScreen("swipeScreen");
    renderCard();
  }

  requestAnimationFrame(() => {
    window.scrollTo(0, 0);
    document.documentElement.scrollTop = 0;
    document.body.scrollTop = 0;
  });
}

function showFriendsTab() {
  closeAllModals();
  renderFriendList();
  renderFriendRequests();
  if ($("friendSearchInput")) $("friendSearchInput").value = state.friendSearchQuery || "";
  if ($("likeSearchInput")) $("likeSearchInput").value = state.likeSearchQuery || "";
  if ($("blockFriendRequestsToggle")) $("blockFriendRequestsToggle").checked = !!state.blockFriendRequests;
  showScreen("friendsScreen");
  setActiveNav("friendsScreen");
  scrollAppTop();
}

function showLikesTab() {
  closeAllModals();
  renderMyLikes();
  setActiveNav("myLikesScreen");
  scrollAppTop();
}

function defaultFriendRequests() {
  return [
    { id: "req_mina", name: "みな", code: "MESHI-MINA-2201" },
    { id: "req_sora", name: "そら", code: "MESHI-SORA-8190" }
  ];
}

function forceSingleAccount() {
  const userId = state.currentUserId || "user_kai";
  const displayName = state.users?.[userId]?.displayName || state.displayName || "カイ";

  state.currentUserId = userId;
  state.users = {
    [userId]: {
      id: userId,
      displayName,
      friendCode: state.users?.[userId]?.friendCode || "MESHI-KAI-0428"
    }
  };

  if (!state.reactionsByUser) state.reactionsByUser = {};
  if (!state.friendshipsByUser) state.friendshipsByUser = {};
  if (!state.friendRequestsByUser) state.friendRequestsByUser = {};
  if (!state.settingsByUser) state.settingsByUser = {};
  if (!state.decisionHistoryByUser) state.decisionHistoryByUser = {};
  if (!state.visitStatusByUser) state.visitStatusByUser = {};
}

function ensureAccountData() {
  forceSingleAccount();
  if (!state.users || !Object.keys(state.users).length) {
    state.users = {
      user_kai: {
        id: "user_kai",
        displayName: state.displayName || "カイ",
        friendCode: "MESHI-KAI-0428"
      }
    };
  }

  if (!state.currentUserId || !state.users[state.currentUserId]) {
    state.currentUserId = Object.keys(state.users)[0] || "user_kai";
  }

  if (!state.reactionsByUser) state.reactionsByUser = {};
  if (!state.friendshipsByUser) state.friendshipsByUser = {};
  if (!state.friendRequestsByUser) state.friendRequestsByUser = {};
  if (!state.settingsByUser) state.settingsByUser = {};
  if (!state.decisionHistoryByUser) state.decisionHistoryByUser = {};
  if (!state.visitStatusByUser) state.visitStatusByUser = {};

  if (!state.reactionsByUser[state.currentUserId]) {
    state.reactionsByUser[state.currentUserId] = state.myAnswers || {};
  }

  if (!state.friendshipsByUser[state.currentUserId]) {
    state.friendshipsByUser[state.currentUserId] = state.customFriends || [];
  }

  if (!state.friendRequestsByUser[state.currentUserId]) {
    state.friendRequestsByUser[state.currentUserId] = state.friendRequests || defaultFriendRequests();
  }

  if (!state.decisionHistoryByUser[state.currentUserId]) {
    state.decisionHistoryByUser[state.currentUserId] = [];
  }

  if (!state.visitStatusByUser[state.currentUserId]) {
    state.visitStatusByUser[state.currentUserId] = {};
  }

  if (!state.settingsByUser[state.currentUserId]) {
    state.settingsByUser[state.currentUserId] = {
      blockFriendRequests: !!state.blockFriendRequests
    };
  }
}

function syncAccountFromLegacy() {
  ensureAccountData();

  const user = state.users[state.currentUserId];
  if (user) {
    user.displayName = state.displayName || user.displayName || "ユーザー";
  }

  state.reactionsByUser[state.currentUserId] = state.myAnswers || {};
  state.friendshipsByUser[state.currentUserId] = state.customFriends || [];
  state.friendRequestsByUser[state.currentUserId] = state.friendRequests || [];
  state.settingsByUser[state.currentUserId] = {
    blockFriendRequests: !!state.blockFriendRequests
  };
}

function applyAccountToLegacy() {
  ensureAccountData();

  const user = state.users[state.currentUserId];
  const settings = state.settingsByUser[state.currentUserId] || {};

  state.displayName = user?.displayName || "ユーザー";
  state.myAnswers = state.reactionsByUser[state.currentUserId] || {};
  state.customFriends = state.friendshipsByUser[state.currentUserId] || [];
  state.friendRequests = state.friendRequestsByUser[state.currentUserId] || [];
  state.blockFriendRequests = !!settings.blockFriendRequests;

  me.id = state.currentUserId;
  me.name = state.displayName;

  syncCustomFriends();
}

function renderAccountSettings() {
  const currentName = $("currentUserNameText");
  const currentId = $("currentUserIdText");

  if (currentName) currentName.textContent = state.displayName || "ユーザー";
  if (currentId) currentId.textContent = state.currentUserId || "user_kai";
}

function switchAccount(userId) {
  showToast("ユーザー切り替えは廃止しました");
}

function createMockAccount() {
  showToast("仮ユーザー作成は廃止しました");
}

function syncCustomFriends() {
  const baseIds = ["partner", "friend_a", "friend_b"];
  friends = friends.filter(friend => baseIds.includes(friend.id));
  state.customFriends.forEach(friend => {
    if (!friends.some(existing => existing.id === friend.id)) {
      friends.push(friend);
    }
  });
}

function createSampleLikes(seedText) {
  const answer = {};
  let seed = 0;
  for (let i = 0; i < seedText.length; i++) seed += seedText.charCodeAt(i);

  stores.forEach((store, index) => {
    const score = (seed + index * 7 + store.id.length) % 10;
    if (score <= 2) answer[store.id] = "like";
    else if (score === 9) answer[store.id] = "nope";
  });

  const likeCount = Object.values(answer).filter(value => value === "like").length;
  if (likeCount < 3) {
    stores.slice(0, 4).forEach(store => answer[store.id] = "like");
  }

  return answer;
}

function normalizeFriendCode(code) {
  return code.trim().toUpperCase().replace(/\s+/g, "-");
}

function openFriendAddModal() {
  $("friendCodeInput").value = "";
  $("friendNameInput").value = "";
  $("friendAddModal").classList.remove("hidden");
  document.body.classList.add("modal-open");
  setTimeout(() => $("friendCodeInput").focus(), 80);
}

function closeFriendAddModal() {
  $("friendAddModal").classList.add("hidden");
  if ($("noticeModal").classList.contains("hidden") && $("settingsModal").classList.contains("hidden")) {
    document.body.classList.remove("modal-open");
  }
}

function addMockFriend() {
  const code = normalizeFriendCode($("friendCodeInput").value || "");
  const nameInput = $("friendNameInput").value.trim();
  const name = nameInput || (code ? code.replace("MESHI-", "").slice(0, 8) : "新しい友達");

  if (!code) {
    showToast("フレンドコードを入力してください");
    return;
  }

  const id = `custom_${Date.now()}`;
  const friend = {
    id,
    name,
    note: "フレンドコードから追加した仮フレンド"
  };

  state.customFriends.push(friend);
  state.friendAnswers[id] = createSampleLikes(code + name);
  state.selectedFriendId = id;
  syncCustomFriends();
  saveState();
  closeFriendAddModal();
  showToast(`${name}を追加しました`);
  renderFriendDetail(id);
}

function renderFriendRequests() {
  const box = document.querySelector(".friend-request-box");
  const list = $("friendRequestList");
  if (!list) return;

  if (state.blockFriendRequests) {
    if (box) box.classList.add("hidden");
    return;
  }

  if (box) box.classList.remove("hidden");
  $("requestCountBadge").textContent = `${state.friendRequests.length}件`;
  list.innerHTML = "";

  if (!state.friendRequests.length) {
    list.innerHTML = `<div class="empty-result"><h3>リクエストなし</h3><p>届いた友達リクエストはここに表示されます。</p></div>`;
    return;
  }

  state.friendRequests.forEach(request => {
    const item = document.createElement("div");
    item.className = "request-item";
    item.innerHTML = `
      <div>
        <strong>${escapeHtml(request.name)}</strong>
        <span>${escapeHtml(request.code)}</span>
      </div>
      <button class="accept-request" data-request-id="${request.id}">承認</button>
      <button class="reject-request" data-request-id="${request.id}">拒否</button>
    `;
    list.appendChild(item);
  });
}

function acceptFriendRequest(requestId) {
  const request = state.friendRequests.find(req => req.id === requestId);
  if (!request) return;

  const id = `custom_${Date.now()}`;
  const friend = {
    id,
    name: request.name,
    note: "友達リクエストから追加した仮フレンド"
  };

  state.customFriends.push(friend);
  state.friendAnswers[id] = createSampleLikes(request.code + request.name);
  state.friendRequests = state.friendRequests.filter(req => req.id !== requestId);
  state.selectedFriendId = id;
  syncCustomFriends();
  saveState();
  showToast(`${request.name}を承認しました`);
  renderFriendDetail(id);
}

function rejectFriendRequest(requestId) {
  const request = state.friendRequests.find(req => req.id === requestId);
  state.friendRequests = state.friendRequests.filter(req => req.id !== requestId);
  saveState();
  showToast(request ? `${request.name}を拒否しました` : "拒否しました");
  renderFriendRequests();
}

function renderHome() {
  syncCustomFriends();
  me.name = state.displayName || "カイ";
  $("noticeDot").classList.toggle("hidden", !!state.noticeSeen);

  const myLikeCount = countLikes(state.myAnswers);
  const friendTotal = friends.reduce((sum, friend) => sum + countLikes(state.friendAnswers[friend.id]), 0);
  const remaining = getUnansweredStores().length;

  $("myLikeCount").textContent = myLikeCount;
  $("friendTotalLikeCount").textContent = friendTotal;
  $("remainingCount").textContent = remaining;

  renderFriendList();
  renderHomeFriendDigest();
  renderRecentLikes();
  renderTodayPick();
  showScreen("homeScreen");
  setActiveNav("homeScreen");
}

function getLikedStoreIds(answerMap = {}) {
  return Object.keys(answerMap).filter(id => answerMap[id] === "like" || answerMap[id] === "superlike");
}

function getTopGenresFromStores(storeList, limit = 3) {
  const counts = {};
  storeList.forEach(store => {
    counts[store.genre] = (counts[store.genre] || 0) + 1;
  });

  return Object.entries(counts)
    .sort((a, b) => b[1] - a[1])
    .slice(0, limit)
    .map(([genre, count]) => ({ genre, count }));
}

function getCompatibility(friendId) {
  const friendAnswers = state.friendAnswers[friendId] || {};
  const myLikedIds = getLikedStoreIds(state.myAnswers);
  const friendLikedIds = getLikedStoreIds(friendAnswers);
  const unionIds = new Set([...myLikedIds, ...friendLikedIds]);

  const commonStores = stores.filter(store => {
    const myLike = state.myAnswers[store.id] === "like" || state.myAnswers[store.id] === "superlike";
    const friendLike = friendAnswers[store.id] === "like" || friendAnswers[store.id] === "superlike";
    return myLike && friendLike;
  });

  const superCommon = commonStores.filter(store => state.myAnswers[store.id] === "superlike").length;
  const baseRate = unionIds.size ? commonStores.length / unionIds.size : 0;
  const score = Math.min(100, Math.round(baseRate * 100 + superCommon * 8));

  const topGenres = getTopGenresFromStores(commonStores, 3);
  const label = score >= 70
    ? "かなり合う"
    : score >= 45
      ? "合いやすい"
      : score >= 20
        ? "まだ伸びる"
        : "判断材料少なめ";

  const genreText = topGenres.length
    ? topGenres.map(item => item.genre).join("・")
    : "共通Like待ち";

  const comment = commonStores.length
    ? `${genreText}で重なりがあります。共通Likeが${commonStores.length}件あるので、まずはこの系統から決めるとスムーズです。`
    : friendLikedIds.length
      ? "まだ共通Likeはありません。相手がLikeしている店を見て、自分も気になるものを増やすと候補が作れます。"
      : "相手のLikeが少ないため、まだ相性は読みづらい状態です。";

  return {
    score,
    label,
    commonCount: commonStores.length,
    unionCount: unionIds.size,
    topGenres,
    genreText,
    comment
  };
}

function renderCompatibilityPanel(friendId) {
  const compatibility = getCompatibility(friendId);

  if ($("compatibilityScoreText")) $("compatibilityScoreText").textContent = `${compatibility.score}%`;
  if ($("compatibilityLabelText")) $("compatibilityLabelText").textContent = compatibility.label;
  if ($("compatibilityCommentText")) $("compatibilityCommentText").textContent = compatibility.comment;

  const chips = $("compatibilityGenreChips");
  if (!chips) return;
  chips.innerHTML = "";

  if (!compatibility.topGenres.length) {
    const span = document.createElement("span");
    span.className = "compatibility-chip";
    span.textContent = "共通Like待ち";
    chips.appendChild(span);
    return;
  }

  compatibility.topGenres.forEach(item => {
    const span = document.createElement("span");
    span.className = "compatibility-chip";
    span.textContent = `${item.genre} ${item.count}件`;
    chips.appendChild(span);
  });
}

function renderFriendList() {
  renderFriendCardsInto("friendList");
  if ($("friendListTab")) {
    renderFriendCardsInto("friendListTab");
  }
}

function renderFriendCardsInto(containerId) {
  const list = $(containerId);
  if (!list) return;
  list.innerHTML = "";

  const query = (containerId === "friendListTab" ? state.friendSearchQuery : "").trim().toLowerCase();
  const filteredFriends = friends.filter(friend => {
    if (!query) return true;
    return friend.name.toLowerCase().includes(query) || friend.id.toLowerCase().includes(query) || friend.note.toLowerCase().includes(query);
  });

  if ($("friendCountBadge") && containerId === "friendListTab") {
    $("friendCountBadge").textContent = `${filteredFriends.length}人`;
  }

  if (!filteredFriends.length) {
    list.innerHTML = `<div class="empty-result"><h3>見つかりません</h3><p>検索条件に合うフレンドはいません。</p></div>`;
    return;
  }

  filteredFriends.forEach(friend => {
    const groups = getGroups(friend.id);
    const recentLikes = getFriendRecentLikes(friend.id, 1);

    if (containerId === "friendListTab") {
      const row = document.createElement("article");
      row.className = "friend-row";
      const compatibility = getCompatibility(friend.id);
      row.innerHTML = `
        <div class="friend-row-main">
          <strong>${escapeHtml(friend.name)}</strong>
          <div class="friend-row-meta">共通 ${groups.common.length} / ${friend.name}だけ ${groups.friendOnly.length} / 最近Like ${recentLikes[0] ? escapeHtml(recentLikes[0].name) : "なし"}</div>
          <span class="compatibility-mini">相性：${compatibility.label} / ${compatibility.genreText}</span>
        </div>
        <div class="friend-row-actions">
          <div class="friend-row-score">
            <strong>${compatibility.score}%</strong>
            <span>相性</span>
          </div>
          <button class="friend-detail-button" data-friend-id="${friend.id}">見る</button>
        </div>
      `;
      list.appendChild(row);
      return;
    }

    const card = document.createElement("article");
    const compatibility = getCompatibility(friend.id);
    card.className = "friend-card";
    card.innerHTML = `
      <div class="friend-card-top">
        <h3>${escapeHtml(friend.name)}</h3>
        <span class="count-badge">${groups.common.length}件</span>
      </div>
      <p>${escapeHtml(friend.note)}</p>
      <div class="friend-meta">
        <span>共通Like ${groups.common.length}</span>
        <span>${friend.name}だけ ${groups.friendOnly.length}</span>
        <span>自分だけ ${groups.myOnly.length}</span>
      </div>
      <div class="recent-like-row">
        ${recentLikes.length ? recentLikes.map(store => `<span>最近Like：${escapeHtml(store.name)}</span>`).join("") : "<span>最近Likeなし</span>"}
        <span>相性：${compatibility.score}% / ${compatibility.label}</span>
        <span>傾向：${compatibility.genreText}</span>
      </div>
      <button class="primary-button friend-detail-button" data-friend-id="${friend.id}">${friend.name}との候補を見る</button>
    `;
    list.appendChild(card);
  });
}

function getFriendRecentLikes(friendId, limit = 3) {
  const answers = state.friendAnswers[friendId] || {};
  return stores.filter(store => answers[store.id] === "like").slice(0, limit);
}

function renderRecentLikes() {
  const likedStores = stores.filter(store => state.myAnswers[store.id] === "like").slice(-3).reverse();
  $("recentLikeBadge").textContent = `${likedStores.length}件`;

  const list = $("recentLikeList");
  list.innerHTML = "";

  if (!likedStores.length) {
    list.innerHTML = `<div class="empty-result"><h3>まだLikeがありません</h3><p>まずは未判定のお店をスワイプして、行きたい店を貯めましょう。</p></div>`;
    return;
  }

  likedStores.forEach(store => {
    const card = document.createElement("div");
    card.className = "compact-card";
    card.innerHTML = `
      <div>
        <strong>${store.emoji} ${escapeHtml(store.name)}${state.myAnswers[store.id] === "superlike" ? `<span class="superlike-mark">Superlike</span>` : ""}</strong>
        <span>${escapeHtml(store.genre)} / ${escapeHtml(store.distance)}</span>
      </div>
      <span>${escapeHtml(store.price)}</span>
    `;
    list.appendChild(card);
  });
}

function startSwipe() {
  const unanswered = getUnansweredStores();
  state.swipeQueue = unanswered.length ? unanswered.map(store => store.id) : stores.map(store => store.id);
  state.index = 0;
  state.historyStack = [];
  saveState();
  showScreen("swipeScreen");
  renderCard();
}

function currentStore() {
  const storeId = state.swipeQueue[state.index];
  return getStore(storeId);
}

function syncMoodFilterUI() {
  document.querySelectorAll(".filter-chip").forEach(chip => {
    chip.classList.toggle("selected", chip.dataset.filter === state.activeFilter);
  });
}

function setMoodFilter(filter) {
  state.activeFilter = filter || "all";
  const unanswered = getUnansweredStores();
  state.swipeQueue = unanswered.map(store => store.id);
  state.index = 0;
  state.historyStack = [];
  saveState();
  syncMoodFilterUI();

  if (!state.swipeQueue.length) {
    showScreen("doneScreen");
    setActiveNav("swipeScreen");
    return;
  }

  showScreen("swipeScreen");
  setActiveNav("swipeScreen");
  renderCard();
}

function renderCard() {
  const store = currentStore();
  if (!store) {
    saveState();
    setActiveNav("swipeScreen");
    showScreen("doneScreen");
    return;
  }

  const total = state.swipeQueue.length;
  $("progressLabel").textContent = `${state.index + 1}/${total}`;
  $("swipeModeLabel").textContent = total === getUnansweredStores().length
    ? "未判定をスワイプ中"
    : "お店をスワイプ中";

  $("cardEmoji").textContent = store.emoji;
  $("cardGenre").textContent = store.genre;
  $("cardPrice").textContent = store.price;
  $("cardName").textContent = store.name;
  $("cardMeta").textContent = `${store.distance} / ${store.rating} / ${store.status}`;
  $("cardDescription").textContent = store.description;

  const likedFriendNames = friendLikeNamesForStore(store.id);
  if (likedFriendNames.length) {
    $("friendLikeLine").classList.remove("hidden");
    $("friendLikeLine").textContent = `${likedFriendNames.join("・")}もLikeしています`;
  } else {
    $("friendLikeLine").classList.add("hidden");
  }

  const tagRow = $("cardTags");
  tagRow.innerHTML = "";
  store.tags.forEach(tag => {
    const span = document.createElement("span");
    span.className = "tag";
    span.textContent = tag;
    tagRow.appendChild(span);
  });

  const hue = Math.abs(hashCode(store.id)) % 40;
  $("cardImageBand").style.background =
    `radial-gradient(circle at 30% 20%, rgba(255,255,255,0.55), transparent 32%), linear-gradient(135deg, hsl(${25 + hue} 100% 78%), hsl(${10 + hue} 94% 62%))`;
}

function hashCode(text) {
  let hash = 0;
  for (let i = 0; i < text.length; i++) {
    hash = ((hash << 5) - hash) + text.charCodeAt(i);
    hash |= 0;
  }
  return hash;
}

function answerCurrent(value) {
  const store = currentStore();
  if (!store) return;

  state.myAnswers[store.id] = value;
  state.historyStack.push({ index: state.index, storeId: store.id });
  state.index += 1;
  saveState();

  const card = $("storeCard");
  card.classList.add(value === "like" ? "like-flash" : "nope-flash");

  setTimeout(() => {
    card.classList.remove("like-flash", "nope-flash");
    renderCard();
  }, 180);
}

function undo() {
  const last = state.historyStack.pop();
  if (!last) return;

  delete state.myAnswers[last.storeId];
  state.index = last.index;
  saveState();
  renderCard();
}

function getGroups(friendId = state.selectedFriendId) {
  const friendAnswers = state.friendAnswers[friendId] || {};
  const common = [];
  const friendOnly = [];
  const myOnly = [];

  stores.forEach(store => {
    const myLike = state.myAnswers[store.id] === "like" || state.myAnswers[store.id] === "superlike";
    const friendLike = friendAnswers[store.id] === "like";

    if (myLike && friendLike) common.push(store);
    else if (!myLike && friendLike) friendOnly.push(store);
    else if (myLike && !friendLike) myOnly.push(store);
  });

  return { common, friendOnly, myOnly };
}

function renderFriendDetail(friendId = state.selectedFriendId) {
  state.selectedFriendId = friendId;
  state.decidedStoreId = null;
  saveState();

  const friend = getFriend(friendId);
  const groups = getGroups(friendId);

  $("friendDetailTitle").textContent = `${friend.name}とのメシマッチ`;
  const compatibility = getCompatibility(friendId);
  $("friendDetailSummary").textContent =
    `${friend.name}との共通Likeは${groups.common.length}件です。相性は${compatibility.score}%（${compatibility.label}）。`;

  renderCompatibilityPanel(friendId);

  $("commonBadge").textContent = `${groups.common.length}件`;
  $("friendOnlyBadge").textContent = `${groups.friendOnly.length}件`;
  $("myOnlyBadge").textContent = `${groups.myOnly.length}件`;

  renderStoreList("commonList", groups.common, "common");
  renderStoreList("friendOnlyList", groups.friendOnly, "friend-only");
  renderStoreList("myOnlyList", groups.myOnly, "my-only");

  const rouletteCandidates = getRouletteCandidates(groups);
  $("rouletteDisplay").textContent = rouletteCandidates.length ? "候補を選べます" : "候補なし";
  $("rouletteText").textContent = groups.common.length
    ? "共通Likeの中から1店を選びます。"
    : "共通Likeがない場合、片方だけがLikeした候補から選びます。";

  renderDecision();
  showScreen("friendDetailScreen");
}

function renderStoreList(containerId, storesToRender, type) {
  const list = $(containerId);
  list.innerHTML = "";

  if (!storesToRender.length) {
    const div = document.createElement("div");
    div.className = "empty-result";
    const message = type === "common"
      ? "2人ともLikeした店はまだありません。"
      : "このカテゴリの候補はまだありません。";
    div.innerHTML = `<h3>候補なし</h3><p>${message}</p>`;
    list.appendChild(div);
    return;
  }

  storesToRender.forEach((store, index) => {
    const item = document.createElement("article");
    item.className = `result-item ${type}`;
    const query = encodeURIComponent(`${store.name} ${store.genre}`);
    item.innerHTML = `
      <div class="result-item-top">
        <span class="genre">#${index + 1} ${escapeHtml(store.genre)}</span>
        <span class="price">${escapeHtml(store.price)}</span>
      </div>
      <h3>${store.emoji} ${escapeHtml(store.name)}</h3>
      <p>${escapeHtml(store.distance)} / ${escapeHtml(store.rating)} / ${escapeHtml(store.status)}</p>
      <p>${escapeHtml(store.description)}</p>
      <div class="tag-row">${store.tags.map(tag => `<span class="tag">${escapeHtml(tag)}</span>`).join("")}</div>
      <div class="result-item-actions">
        <a class="map-link" href="https://www.google.com/maps/search/?api=1&query=${query}" target="_blank" rel="noopener">Maps</a>
        <button class="decide-button" data-store-id="${store.id}">この店にする</button>
      </div>
    `;
    list.appendChild(item);
  });
}

function getRouletteCandidates(groups = getGroups()) {
  if (groups.common.length) return groups.common;
  return [...groups.friendOnly, ...groups.myOnly];
}

function runRoulette() {
  const groups = getGroups(state.selectedFriendId);
  const candidates = getRouletteCandidates(groups);

  if (!candidates.length) {
    $("rouletteDisplay").textContent = "候補がありません";
    showToast("候補がありません");
    return;
  }

  const display = $("rouletteDisplay");
  const button = $("rouletteBtn");
  button.disabled = true;
  display.classList.add("spinning");

  let count = 0;
  const max = 18;
  const timer = setInterval(() => {
    const store = candidates[count % candidates.length];
    display.textContent = `${store.emoji} ${store.name}`;
    count += 1;

    if (count >= max) {
      clearInterval(timer);
      const selected = candidates[Math.floor(Math.random() * candidates.length)];
      display.classList.remove("spinning");
      display.textContent = `${selected.emoji} ${selected.name} に決定`;
      button.disabled = false;
      decideStore(selected.id);
    }
  }, 110);
}

function getCurrentDecisionHistory() {
  ensureAccountData();
  if (!state.decisionHistoryByUser[state.currentUserId]) {
    state.decisionHistoryByUser[state.currentUserId] = [];
  }

  if (!state.visitStatusByUser[state.currentUserId]) {
    state.visitStatusByUser[state.currentUserId] = {};
  }
  return state.decisionHistoryByUser[state.currentUserId];
}

function saveDecisionHistory(storeId) {
  const store = getStore(storeId);
  if (!store) return;

  const friend = getFriend(state.selectedFriendId);
  const history = getCurrentDecisionHistory();

  history.unshift({
    id: `decision_${Date.now()}`,
    storeId,
    storeName: store.name,
    genre: store.genre,
    friendId: friend?.id || "",
    friendName: friend?.name || "未選択",
    judgement: state.myAnswers[storeId] || "未判定",
    date: new Date().toLocaleDateString("ja-JP")
  });

  state.decisionHistoryByUser[state.currentUserId] = history.slice(0, 30);
  saveState();
}

function renderDecisionHistory() {
  const list = $("decisionHistoryList");
  const badge = $("decisionHistoryCount");
  if (!list) return;

  const history = getCurrentDecisionHistory();
  if (badge) badge.textContent = `${history.length}件`;

  list.innerHTML = "";

  if (!history.length) {
    list.innerHTML = `<div class="empty-result"><h3>まだ決定履歴がありません</h3><p>友達タブで「この店にする」を押すと、ここに履歴が残ります。</p></div>`;
    return;
  }

  history.slice(0, 5).forEach(item => {
    const store = getStore(item.storeId);
    const div = document.createElement("div");
    div.className = "decision-history-item";
    div.innerHTML = `
      <div>
        <strong>${store?.emoji || "🍽️"} ${escapeHtml(item.storeName)}</strong>
        <span>${escapeHtml(item.date)} / ${escapeHtml(item.friendName)}と決定 / ${escapeHtml(item.genre)} / ${judgementLabel(item.judgement)}</span>
      </div>
      <button data-history-store="${escapeHtml(item.storeId)}">詳細</button>
    `;
    list.appendChild(div);
  });
}

function decideStore(storeId) {
  state.decidedStoreId = storeId;
  saveDecisionHistory(storeId);
  saveState();
  renderDecision();
  $("decisionPanel").scrollIntoView({ behavior: "smooth", block: "start" });
}

function renderDecision() {
  const panel = $("decisionPanel");
  const store = getStore(state.decidedStoreId);

  if (!store) {
    panel.classList.add("hidden");
    return;
  }

  panel.classList.remove("hidden");
  $("decisionTitle").textContent = `${store.emoji} ${store.name}に決定`;
  $("decisionMeta").textContent = `${store.genre} / ${store.distance} / ${store.rating} / ${store.status}`;
  $("shareText").value = createShareText(store);
}

function createShareText(decidedStore) {
  const friend = getFriend(state.selectedFriendId);
  const groups = getGroups(state.selectedFriendId);
  const mapUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(`${decidedStore.name} ${decidedStore.genre}`)}`;

  const commonText = groups.common.length
    ? groups.common.map((s, i) => `${i + 1}. ${s.name}（${s.genre} / ${s.distance}）`).join("\n")
    : "なし";

  const friendOnlyText = groups.friendOnly.length
    ? groups.friendOnly.map((s, i) => `${i + 1}. ${s.name}（${friend.name}がLike）`).join("\n")
    : "なし";

  const myOnlyText = groups.myOnly.length
    ? groups.myOnly.map((s, i) => `${i + 1}. ${s.name}（${me.name}がLike）`).join("\n")
    : "なし";

  return `今日のメシマッチ結果🍽️

参加者：${me.name} / ${friend.name}

2人ともLike：
${commonText}

${friend.name}だけLike：
${friendOnlyText}

${me.name}だけLike：
${myOnlyText}

今回の決定：
${decidedStore.name}
${decidedStore.genre} / ${decidedStore.distance} / ${decidedStore.rating}

Google Maps：
${mapUrl}`;
}

function getStoreCategory(store) {
  const genre = store.genre;
  if (["ラーメン", "うどん", "そば"].includes(genre)) return "麺類";
  if (["定食", "牛丼", "とんかつ", "唐揚げ", "寿司"].includes(genre)) return "和食・ごはん";
  if (["イタリアン", "洋食", "ハンバーガー", "ピザ"].includes(genre)) return "洋食";
  if (["インドカレー", "韓国料理", "タイ料理"].includes(genre)) return "アジア・スパイス";
  if (["カフェ", "サラダ", "スイーツ"].includes(genre)) return "軽め・カフェ";
  if (["焼肉", "居酒屋"].includes(genre)) return "夜・ご褒美";
  return "その他";
}

function syncHistoryTabs() {
  document.querySelectorAll(".history-tab").forEach(tab => {
    tab.classList.toggle("selected", tab.dataset.history === state.historyView);
  });

  syncHistoryReswipeButton();
}

function historyViewLabel(value = state.historyView) {
  if (value === "like") return "Like";
  if (value === "nope") return "Nope";
  if (value === "superlike") return "Superlike";
  if (value === "unanswered") return "未判定";
  return "履歴";
}

function syncHistoryReswipeButton() {
  const button = $("historyReswipeBtn");
  if (!button) return;

  const canReswipe = ["like", "nope", "superlike"].includes(state.historyView);
  button.classList.toggle("hidden", !canReswipe);

  if (canReswipe) {
    button.textContent = `${historyViewLabel()}済みを再スワイプ`;
  }
}

function startReswipeByCurrentHistory() {
  if (!["like", "nope", "superlike"].includes(state.historyView)) {
    showToast("この履歴は再スワイプ対象外です");
    return;
  }

  const targetStores = getHistoryStores();
  startReswipeByStores(
    targetStores.map(store => store.id),
    `${historyViewLabel()}済み`
  );
}

function getHistoryStores() {
  if (state.historyView === "like") return stores.filter(store => state.myAnswers[store.id] === "like");
  if (state.historyView === "superlike") return stores.filter(store => state.myAnswers[store.id] === "superlike");
  if (state.historyView === "nope") return stores.filter(store => state.myAnswers[store.id] === "nope");
  return stores.filter(store => !state.myAnswers[store.id]);
}

function renderMyLikes() {
  const list = $("myLikesFolderList") || $("myLikesList");
  const query = (state.likeSearchQuery || "").trim().toLowerCase();

  syncHistoryTabs();
  renderDecisionHistory();

  let targetStores = getHistoryStores();

  if (query) {
    targetStores = targetStores.filter(store => {
      const target = `${store.name} ${store.genre} ${store.tags.join(" ")} ${store.description}`.toLowerCase();
      return target.includes(query);
    });
  }

  list.innerHTML = "";

  const input = $("likeSearchInput");
  if (input) input.value = state.likeSearchQuery || "";

  const labelMap = {
    like: "Like",
    superlike: "Superlike",
    nope: "Nope",
    unanswered: "未判定"
  };

  if (!targetStores.length) {
    const message = query
      ? "検索条件に合う履歴はありません。"
      : `${labelMap[state.historyView]}の店はありません。`;
    list.innerHTML = `<div class="empty-result"><h3>該当なし</h3><p>${message}</p></div>`;
    showScreen("myLikesScreen");
    setActiveNav("myLikesScreen");
    return;
  }

  const categoryMap = targetStores.reduce((acc, store) => {
    const category = getStoreCategory(store);
    if (!acc[category]) acc[category] = {};
    if (!acc[category][store.genre]) acc[category][store.genre] = [];
    acc[category][store.genre].push(store);
    return acc;
  }, {});

  Object.entries(categoryMap)
    .sort(([a], [b]) => a.localeCompare(b, "ja"))
    .forEach(([category, genres], categoryIndex) => {
      const total = Object.values(genres).reduce((sum, arr) => sum + arr.length, 0);
      const categoryFolder = document.createElement("details");
      categoryFolder.className = "category-folder";
      categoryFolder.open = categoryIndex === 0;

      const body = Object.entries(genres)
        .sort(([a], [b]) => a.localeCompare(b, "ja"))
        .map(([genre, genreStores], genreIndex) => {
          return `
            <details class="genre-subfolder" ${genreIndex === 0 ? "open" : ""}>
              <summary>
                <span class="folder-summary-main"><strong>${escapeHtml(genre)}</strong></span>
                <span class="folder-summary-actions">
                  <span>${genreStores.length}件</span>
                </span>
              </summary>
              <div class="genre-folder-body">
                ${genreStores.map(store => {
                  const mapQuery = encodeURIComponent(`${store.name} ${store.genre}`);
                  let actionButton = `<a href="https://www.google.com/maps/search/?api=1&query=${mapQuery}" target="_blank" rel="noopener">Maps</a>`;
                  if (state.historyView === "nope") {
                    actionButton = `
                      <div class="rejudge-panel">
                        <button class="rejudge-super" data-rejudge-id="${store.id}" data-rejudge-value="superlike">Superlike</button>
                        <div class="rejudge-actions">
                          <button class="restore-button" data-rejudge-id="${store.id}" data-rejudge-value="like">Like</button>
                          <button class="restore-button" data-rejudge-id="${store.id}" data-rejudge-value="unanswered">未判定</button>
                        </div>
                      </div>
                    `;
                  }

                  return `
                    <div class="history-action-row" data-store-row="${store.id}">
                      <div>
                        <strong>${store.emoji} ${escapeHtml(store.name)}${state.myAnswers[store.id] === "superlike" ? `<span class="superlike-mark">Superlike</span>` : ""}</strong>
                        <span>${escapeHtml(store.distance)} / ${escapeHtml(store.rating)} / ${escapeHtml(store.price)}</span>
                      </div>
                      ${actionButton}
                    </div>
                  `;
                }).join("")}
              </div>
            </details>
          `;
        }).join("");

      categoryFolder.innerHTML = `
        <summary>
          <span class="folder-summary-main">
            <strong>${escapeHtml(category)}</strong>
          </span>
          <span class="folder-summary-actions">
            <span>${total}件</span>
          </span>
        </summary>
        <div class="category-folder-body">${body}</div>
      `;

      list.appendChild(categoryFolder);
    });

  showScreen("myLikesScreen");
  setActiveNav("myLikesScreen");
  renderInlineReswipe();
}

function rejudgeNope(storeId, value) {
  if (state.myAnswers[storeId] !== "nope") return;
  setStoreJudgement(storeId, value);
}

function startReswipeByStores(storeIds, label = "履歴") {
  const queue = storeIds.filter(id => getStore(id));
  if (!queue.length) {
    showToast("再スワイプできる店がありません");
    return;
  }

  state.inlineReswipeActive = true;
  state.inlineReswipeQueue = queue;
  state.inlineReswipeIndex = 0;
  state.inlineReswipeLabel = label;
  state.inlineReswipeHistory = [];
  saveState();

  showScreen("myLikesScreen");
  setActiveNav("myLikesScreen");
  renderMyLikes();
  renderInlineReswipe();
  showToast(`${label}をLikeタブ内で再スワイプします`);
}

function currentInlineReswipeStore() {
  const storeId = state.inlineReswipeQueue[state.inlineReswipeIndex];
  return getStore(storeId);
}

function renderInlineReswipe() {
  const panel = $("inlineReswipePanel");
  if (!panel) return;

  if (!state.inlineReswipeActive) {
    panel.classList.add("hidden");
    return;
  }

  const store = currentInlineReswipeStore();

  if (!store) {
    cancelInlineReswipe(false);
    showToast("再スワイプが完了しました");
    renderMyLikes();
    return;
  }

  panel.classList.remove("hidden");
  $("inlineReswipeTitle").textContent = `${state.inlineReswipeLabel}を再スワイプ`;
  $("inlineReswipeEmoji").textContent = store.emoji;
  $("inlineReswipeGenre").textContent = store.genre;
  $("inlineReswipeName").textContent = store.name;
  $("inlineReswipeMeta").textContent = `${store.distance} / ${store.rating} / ${store.status}`;
  $("inlineReswipeDescription").textContent = store.description;
  $("inlineCurrentJudgement").textContent = `現在：${judgementLabel(state.myAnswers[store.id])}`;
  $("inlineReswipeProgress").textContent = `${state.inlineReswipeIndex + 1}/${state.inlineReswipeQueue.length}`;

  const tagRow = $("inlineReswipeTags");
  tagRow.innerHTML = "";
  store.tags.forEach(tag => {
    const span = document.createElement("span");
    span.className = "tag";
    span.textContent = tag;
    tagRow.appendChild(span);
  });
}

function answerInlineReswipe(value) {
  const store = currentInlineReswipeStore();
  if (!store) return;

  state.inlineReswipeHistory.push({
    storeId: store.id,
    previous: state.myAnswers[store.id]
  });

  state.myAnswers[store.id] = value;
  state.inlineReswipeIndex += 1;
  saveState();

  showToast(`${store.name}を${judgementLabel(value)}に変更しました`);
  renderInlineReswipe();
  renderMyLikes();
}

function skipInlineReswipe() {
  if (!currentInlineReswipeStore()) return;
  state.inlineReswipeIndex += 1;
  saveState();
  renderInlineReswipe();
}

function undoInlineReswipe() {
  const last = state.inlineReswipeHistory.pop();
  if (!last) {
    showToast("戻せる操作がありません");
    return;
  }

  if (last.previous) {
    state.myAnswers[last.storeId] = last.previous;
  } else {
    delete state.myAnswers[last.storeId];
  }

  state.inlineReswipeIndex = Math.max(0, state.inlineReswipeIndex - 1);
  saveState();
  showToast("1つ戻しました");
  renderInlineReswipe();
  renderMyLikes();
}

function cancelInlineReswipe(showMessage = true) {
  state.inlineReswipeActive = false;
  state.inlineReswipeQueue = [];
  state.inlineReswipeIndex = 0;
  state.inlineReswipeLabel = "";
  state.inlineReswipeHistory = [];
  saveState();
  renderInlineReswipe();
  if (showMessage) showToast("再スワイプを取り消しました");
}

function startReswipeByCategory(category) {
  const targetStores = getHistoryStores().filter(store => getStoreCategory(store) === category);
  startReswipeByStores(targetStores.map(store => store.id), category);
}

function startReswipeByGenre(genre) {
  const targetStores = getHistoryStores().filter(store => store.genre === genre);
  startReswipeByStores(targetStores.map(store => store.id), genre);
}

function judgementLabel(value) {
  if (value === "like") return "Like";
  if (value === "nope") return "Nope";
  if (value === "superlike") return "Superlike";
  return "未判定";
}

function visitStatusLabel(value) {
  if (value === "visited") return "行ったことある";
  if (value === "want_again") return "また行きたい";
  if (value === "cooldown") return "しばらくいい";
  return "未訪問";
}

function getVisitStatus(storeId) {
  ensureAccountData();
  const map = state.visitStatusByUser[state.currentUserId] || {};
  return map[storeId] || "unvisited";
}

function setVisitStatus(storeId, status) {
  const store = getStore(storeId);
  if (!store) return;

  ensureAccountData();
  if (!state.visitStatusByUser[state.currentUserId]) {
    state.visitStatusByUser[state.currentUserId] = {};
  }

  state.visitStatusByUser[state.currentUserId][storeId] = status || "unvisited";
  saveState();
  showToast(`${store.name}：${visitStatusLabel(status)}に変更しました`);

  if (!$("storeDetailModal").classList.contains("hidden")) {
    openStoreDetail(storeId);
  }

  renderMyLikes();
}

function syncVisitStatusButtons(storeId) {
  const current = getVisitStatus(storeId);
  document.querySelectorAll("[data-visit-status]").forEach(btn => {
    btn.classList.toggle("active", btn.dataset.visitStatus === current);
  });
}

function openStoreDetail(storeId) {
  const store = getStore(storeId);
  if (!store) return;

  state.detailStoreId = storeId;
  saveState();

  const likedFriends = friendLikeNamesForStore(store.id);
  const current = state.myAnswers[store.id];
  const mapQuery = encodeURIComponent(`${store.name} ${store.genre}`);

  $("detailStoreName").textContent = `${store.emoji} ${store.name}`;
  $("detailStoreBody").innerHTML = `
    <div class="detail-hero">
      <div class="detail-emoji">${store.emoji}</div>
      <div class="detail-meta">
        <span>${escapeHtml(store.genre)}</span>
        <span>${escapeHtml(store.distance)}</span>
        <span>${escapeHtml(store.price)}</span>
        <span>${escapeHtml(store.rating)}</span>
        <span>${escapeHtml(store.status)}</span>
      </div>
      <p class="detail-description">${escapeHtml(store.description)}</p>
      <div class="tag-row">${store.tags.map(tag => `<span class="tag">${escapeHtml(tag)}</span>`).join("")}</div>
      <span class="current-judgement">現在：${judgementLabel(current)}</span>
      <span class="visit-status-badge ${getVisitStatus(store.id)}">訪問状態：${visitStatusLabel(getVisitStatus(store.id))}</span>
      <div class="rejudge-card-note">友人に連れられて行った後や、気分が変わった時はここで判定を更新できます。</div>
      <div class="detail-friends">
        ${likedFriends.length ? `${likedFriends.map(escapeHtml).join("・")}もLikeしています` : "この店をLikeしているフレンドはまだいません"}
      </div>
    </div>
  `;

  $("detailMapLink").href = `https://www.google.com/maps/search/?api=1&query=${mapQuery}`;
  $("storeDetailModal").classList.remove("hidden");
  syncVisitStatusButtons(storeId);
  document.body.classList.add("modal-open");
}

function closeStoreDetailModal() {
  $("storeDetailModal").classList.add("hidden");
  if (
    $("noticeModal").classList.contains("hidden") &&
    $("settingsModal").classList.contains("hidden") &&
    $("friendAddModal").classList.contains("hidden")
  ) {
    document.body.classList.remove("modal-open");
  }
}

function setStoreJudgement(storeId, value) {
  const store = getStore(storeId);
  if (!store) return;

  if (value === "unanswered") {
    delete state.myAnswers[storeId];
  } else {
    state.myAnswers[storeId] = value;
  }

  saveState();
  showToast(`${store.name}を${judgementLabel(value)}に変更しました`);

  if (!$("storeDetailModal").classList.contains("hidden")) {
    openStoreDetail(storeId);
  }

  renderMyLikes();
}

function clearDecision() {
  state.decidedStoreId = null;
  saveState();
  renderDecision();
}

async function copyPlainText(text, message) {
  try {
    await navigator.clipboard.writeText(text);
    showToast(message);
  } catch {
    showToast(message);
  }
}

async function copyShareText() {
  const text = $("shareText").value;
  try {
    await navigator.clipboard.writeText(text);
    showToast("共有文をコピーしました");
  } catch {
    $("shareText").select();
    document.execCommand("copy");
    showToast("共有文をコピーしました");
  }
}

function showToast(message) {
  const toast = $("toast");
  toast.textContent = message;
  toast.classList.add("show");
  setTimeout(() => toast.classList.remove("show"), 1600);
}

function resetSwipeHistory() {
  state.myAnswers = {};
  state.index = 0;
  state.swipeQueue = [];
  state.historyStack = [];
  state.decidedStoreId = null;
  saveState();
  closeAllModals();
  showToast("スワイプ履歴をリセットしました");
  if ($("friendSearchInput")) $("friendSearchInput").value = state.friendSearchQuery || "";
  if ($("likeSearchInput")) $("likeSearchInput").value = state.likeSearchQuery || "";
  if ($("blockFriendRequestsToggle")) $("blockFriendRequestsToggle").checked = !!state.blockFriendRequests;
  openSwipeTab();
}

function resetAll() {
  localStorage.removeItem(STORAGE_KEY);
  state.index = 0;
  state.swipeQueue = [];
  state.selectedFriendId = "partner";
  state.myAnswers = {};
  state.friendAnswers = initialFriendLikes;
  state.historyStack = [];
  state.decidedStoreId = null;
  state.displayName = "カイ";
  state.noticeSeen = false;
  state.customFriends = [];
  state.friendRequests = [
    { id: "req_mina", name: "みな", code: "MESHI-MINA-2201" },
    { id: "req_sora", name: "そら", code: "MESHI-SORA-8190" }
  ];
  state.friendSearchQuery = "";
  state.blockFriendRequests = false;
  state.currentUserId = "user_kai";
  state.users = {
    user_kai: { id: "user_kai", displayName: "カイ", friendCode: "MESHI-KAI-0428" }
  };
  state.reactionsByUser = { user_kai: state.myAnswers };
  state.friendshipsByUser = { user_kai: state.customFriends };
  state.friendRequestsByUser = { user_kai: state.friendRequests };
  state.settingsByUser = { user_kai: { blockFriendRequests: false } };
  state.decisionHistoryByUser = { user_kai: [] };
  state.visitStatusByUser = { user_kai: {} };
  state.customStores = [];
  state.nearbyStores = [];
  state.nearbyCache = null;
  mergeCustomStores();
  applyAccountToLegacy();
  me.name = "カイ";
  if ($("displayNameInput")) $("displayNameInput").value = "カイ";
  if ($("displayNameInputModal")) $("displayNameInputModal").value = "カイ";
  closeAllModals();
  showToast("全データをリセットしました");
  renderHome();
}

function renderNotices() {
  const modal = $("noticeModal");
  const list = modal ? modal.querySelector("#noticeList") : $("noticeList");

  list.innerHTML = "";

  notices.forEach((notice, index) => {
    const item = document.createElement("article");
    item.className = `notice-item ${index === 0 && !state.noticeSeen ? "unread" : ""}`;
    item.innerHTML = `
      <p class="notice-date">${escapeHtml(notice.date)}</p>
      <h3>${escapeHtml(notice.title)}</h3>
      <p>${escapeHtml(notice.body)}</p>
    `;
    list.appendChild(item);
  });
}

function openNotice() {
  renderNotices();
  state.noticeSeen = true;
  saveState();
  const dot = $("noticeDot");
  if (dot) dot.classList.add("hidden");
  const modal = $("noticeModal");
  if (modal) modal.classList.remove("hidden");
  document.body.classList.add("modal-open");
}

function openSettings() {
  const modalInput = $("displayNameInputModal");
  if (modalInput) modalInput.value = state.displayName || "カイ";

  const toggle = $("blockFriendRequestsToggle");
  if (toggle) toggle.checked = !!state.blockFriendRequests;

  renderAccountSettings();

  const modal = $("settingsModal");
  if (modal) modal.classList.remove("hidden");
  document.body.classList.add("modal-open");
}

function saveSettingsAndHome() {
  const modalInput = $("displayNameInputModal");
  const legacyInput = $("displayNameInput");
  const source = modalInput || legacyInput;
  const name = source.value.trim() || "カイ";

  state.displayName = name.slice(0, 12);
  me.name = state.displayName;

  if (state.users?.[state.currentUserId]) {
    state.users[state.currentUserId].displayName = state.displayName;
  }

  const toggle = $("blockFriendRequestsToggle");
  if (toggle) state.blockFriendRequests = !!toggle.checked;

  saveState();
  showToast("設定を保存しました");
  closeSettingsModal();
  openSwipeTab();
}

function escapeHtml(value) {
  return String(value).replace(/[&<>"']/g, (char) => ({
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    '"': "&quot;",
    "'": "&#039;"
  })[char]);
}

function initializeSwipeGestures() {
  const card = $("storeCard");
  if (!card || card.dataset.swipeBound === "true") return;
  card.dataset.swipeBound = "true";

  let startX = 0;
  let currentX = 0;
  let dragging = false;
  let pointerId = null;

  function beginDrag(clientX, id = null) {
    dragging = true;
    pointerId = id;
    startX = clientX;
    currentX = 0;
    card.classList.add("dragging");
    card.style.transition = "none";
  }

  function moveDrag(clientX) {
    if (!dragging) return;
    currentX = clientX - startX;
    const rotate = currentX / 18;
    card.style.transform = `translateX(${currentX}px) rotate(${rotate}deg)`;
  }

  function endDrag() {
    if (!dragging) return;
    dragging = false;
    pointerId = null;
    card.classList.remove("dragging");
    card.style.transition = "";
    card.style.transform = "";

    const threshold = 70;
    const result = currentX;
    currentX = 0;

    if (result > threshold) answerCurrent("like");
    else if (result < -threshold) answerCurrent("nope");
  }

  function cancelDrag() {
    dragging = false;
    pointerId = null;
    currentX = 0;
    card.classList.remove("dragging");
    card.style.transition = "";
    card.style.transform = "";
  }

  card.addEventListener("pointerdown", (event) => {
    if (event.button !== undefined && event.button !== 0) return;
    beginDrag(event.clientX, event.pointerId);
    try {
      card.setPointerCapture(event.pointerId);
    } catch {}
  });

  card.addEventListener("pointermove", (event) => {
    if (pointerId !== null && event.pointerId !== pointerId) return;
    moveDrag(event.clientX);
  });

  card.addEventListener("pointerup", endDrag);
  card.addEventListener("pointercancel", cancelDrag);
  card.addEventListener("lostpointercapture", () => {
    if (dragging) endDrag();
  });

  // Fallback for mobile browsers where pointer events can be unreliable inside PWAs.
  card.addEventListener("touchstart", (event) => {
    const touch = event.touches[0];
    if (!touch) return;
    beginDrag(touch.clientX, "touch");
  }, { passive: true });

  card.addEventListener("touchmove", (event) => {
    const touch = event.touches[0];
    if (!touch) return;
    moveDrag(touch.clientX);
    if (Math.abs(currentX) > 8) event.preventDefault();
  }, { passive: false });

  card.addEventListener("touchend", endDrag);
  card.addEventListener("touchcancel", cancelDrag);
}

function closeNoticeModal() {
  $("noticeModal").classList.add("hidden");
  if ($("settingsModal").classList.contains("hidden") && $("friendAddModal").classList.contains("hidden")) {
    document.body.classList.remove("modal-open");
  }
}

function closeSettingsModal() {
  $("settingsModal").classList.add("hidden");
  if ($("noticeModal").classList.contains("hidden") && $("friendAddModal").classList.contains("hidden")) {
    document.body.classList.remove("modal-open");
  }
}

function closeModalOnBackdrop(event) {
  if (event.target.id === "noticeModal") closeNoticeModal();
  if (event.target.id === "settingsModal") closeSettingsModal();
  if (event.target.id === "friendAddModal") closeFriendAddModal();
  if (event.target.id === "storeDetailModal") closeStoreDetailModal();

}

function on(id, event, handler) {
  const el = $(id);
  if (el) el.addEventListener(event, handler);
}

function setupBottomNav() {
  const nav = document.querySelector(".bottom-nav");
  if (!nav || nav.dataset.bound === "true") return;
  nav.dataset.bound = "true";

  nav.addEventListener("click", (event) => {
    const button = event.target.closest("[data-nav]");
    if (!button) return;

    event.preventDefault();
    event.stopPropagation();

    const target = button.dataset.nav;
    if (target === "swipe") openSwipeTab();
    if (target === "friends") showFriendsTab();
    if (target === "likes") showLikesTab();
  });
}

function getExportPayload() {
  syncAccountFromLegacy();

  return {
    app: "meshi_match",
    version: "0.29",
    exportedAt: new Date().toISOString(),
    storageKey: STORAGE_KEY,
    state: {
      ...state
    }
  };
}

function downloadJson(filename, data) {
  const blob = new Blob([JSON.stringify(data, null, 2)], { type: "application/json" });
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url;
  a.download = filename;
  document.body.appendChild(a);
  a.click();
  a.remove();
  URL.revokeObjectURL(url);
}

function exportData() {
  const payload = getExportPayload();
  const date = new Date().toISOString().slice(0, 10).replaceAll("-", "");
  downloadJson(`meshi-match-backup-${date}.json`, payload);
  showToast("データを書き出しました");
}

function normalizeImportedState(payload) {
  if (!payload) throw new Error("データが空です");

  if (payload.app === "meshi_match" && payload.state) {
    return payload.state;
  }

  if (payload.currentUserId || payload.myAnswers || payload.reactionsByUser) {
    return payload;
  }

  throw new Error("メシマッチのバックアップではありません");
}

function importDataFromFile(file) {
  if (!file) return;

  const reader = new FileReader();

  reader.onload = () => {
    try {
      const payload = JSON.parse(String(reader.result || "{}"));
      const importedState = normalizeImportedState(payload);

      const ok = confirm("現在の端末内データを、読み込んだバックアップで置き換えます。よろしいですか？");
      if (!ok) return;

      state = {
        ...state,
        ...importedState
      };

      ensureAccountData();
      forceSingleAccount();
      applyAccountToLegacy();
      mergeCustomStores();
      saveState();

      showToast("データを読み込みました");
      closeAllModals();
      openSwipeTab();
    } catch (error) {
      console.error(error);
      showToast("読み込みに失敗しました");
    } finally {
      const input = $("importDataInput");
      if (input) input.value = "";
    }
  };

  reader.readAsText(file);
}

function registerServiceWorker() {
  if (!("serviceWorker" in navigator)) return;

  let refreshing = false;

  navigator.serviceWorker.addEventListener("controllerchange", () => {
    if (refreshing) return;
    refreshing = true;
    window.location.reload();
  });

  window.addEventListener("load", async () => {
    try {
      const registration = await navigator.serviceWorker.register("./service-worker.js");

      // アプリ起動時に更新確認。ホーム画面追加済みでも最新版へ寄せる。
      registration.update();

      if (registration.waiting) {
        registration.waiting.postMessage({ type: "SKIP_WAITING" });
      }

      registration.addEventListener("updatefound", () => {
        const newWorker = registration.installing;
        if (!newWorker) return;

        newWorker.addEventListener("statechange", () => {
          if (newWorker.state === "installed" && navigator.serviceWorker.controller) {
            newWorker.postMessage({ type: "SKIP_WAITING" });
          }
        });
      });

      // iOS Safariなどでupdatefoundが鈍い場合の保険。
      setInterval(() => {
        registration.update().catch(() => null);
      }, 60 * 60 * 1000);
    } catch (error) {
      console.info("Service worker registration skipped:", error);
    }
  });
}

function attachEvents() {
  setupBottomNav();

  on("noticeBtn", "click", openNotice);
  on("settingsBtn", "click", openSettings);

  on("refreshSwipeBtn", "click", openSwipeTab);
  on("openMyLikesBtn", "click", renderMyLikes);
  on("homeOpenFriendsBtn", "click", showFriendsTab);
  on("homeOpenLikesBtn", "click", renderMyLikes);
  on("homeAddFriendBtn", "click", openFriendAddModal);

  on("backHomeFromDetailBtn", "click", openSwipeTab);
  on("goSwipeFromDetailBtn", "click", openSwipeTab);
  on("doneToHomeBtn", "click", openSwipeTab);
  on("doneToMyLikesBtn", "click", renderMyLikes);
  on("backHomeFromMyLikesBtn", "click", openSwipeTab);
  on("clearOnlyMyLikesBtn", "click", resetSwipeHistory);
  on("historyReswipeBtn", "click", startReswipeByCurrentHistory);
  on("decisionHistoryList", "click", (event) => {
    const btn = event.target.closest("[data-history-store]");
    if (btn) openStoreDetail(btn.dataset.historyStore);
  });
  on("cancelInlineReswipeBtn", "click", () => cancelInlineReswipe(true));
  on("undoInlineReswipeBtn", "click", undoInlineReswipe);
  on("skipInlineReswipeBtn", "click", skipInlineReswipe);
  document.querySelectorAll("[data-inline-judgement]").forEach(btn => {
    btn.addEventListener("click", () => answerInlineReswipe(btn.dataset.inlineJudgement));
  });

  on("likeBtn", "click", () => answerCurrent("like"));
  on("superLikeBtn", "click", () => answerCurrent("superlike"));
  on("nopeBtn", "click", () => answerCurrent("nope"));
  on("undoBtn", "click", undo);
  on("rouletteBtn", "click", runRoulette);
  on("copyShareBtn", "click", copyShareText);
  on("clearDecisionBtn", "click", clearDecision);

  on("closeNoticeModalBtn", "click", closeNoticeModal);
  on("closeSettingsModalBtn", "click", closeSettingsModal);
  on("noticeModal", "click", closeModalOnBackdrop);
  on("settingsModal", "click", closeModalOnBackdrop);
  on("saveSettingsModalBtn", "click", saveSettingsAndHome);
  on("exportDataBtn", "click", exportData);
  on("importDataInput", "change", (event) => importDataFromFile(event.target.files?.[0]));
  on("fetchNearbyBtn", "click", () => fetchNearbyStores(false));
  on("resetSwipeModalBtn", "click", resetSwipeHistory);
  on("resetAllModalBtn", "click", resetAll);

  on("addFriendBtn", "click", openFriendAddModal);
  on("closeFriendAddModalBtn", "click", closeFriendAddModal);
  on("friendAddModal", "click", closeModalOnBackdrop);
  on("addFriendConfirmBtn", "click", addMockFriend);
  on("copyFriendCodeBtn", "click", () => copyPlainText("MESHI-KAI-0428", "フレンドコードをコピーしました"));
  on("closeStoreDetailModalBtn", "click", closeStoreDetailModal);
  on("storeDetailModal", "click", closeModalOnBackdrop);
  on("detailUnansweredBtn", "click", () => {
    if (state.detailStoreId) setStoreJudgement(state.detailStoreId, "unanswered");
  });
  document.querySelectorAll("[data-detail-action]").forEach(btn => {
    btn.addEventListener("click", () => {
      if (state.detailStoreId) setStoreJudgement(state.detailStoreId, btn.dataset.detailAction);
    });
  });

  document.querySelectorAll("[data-visit-status]").forEach(btn => {
    btn.addEventListener("click", () => {
      if (state.detailStoreId) setVisitStatus(state.detailStoreId, btn.dataset.visitStatus);
    });
  });

  on("friendSearchInput", "input", (event) => {
    state.friendSearchQuery = event.target.value;
    saveState();
    renderFriendCardsInto("friendListTab");
  });

  on("moodFilterStrip", "click", (event) => {
    const chip = event.target.closest(".filter-chip");
    if (!chip) return;
    setMoodFilter(chip.dataset.filter);
  });

  document.querySelectorAll(".history-tab").forEach(tab => {
    tab.addEventListener("click", () => {
      state.historyView = tab.dataset.history || "like";
      saveState();
      renderMyLikes();
    });
  });

  on("myLikesFolderList", "click", (event) => {
    const rejudge = event.target.closest("[data-rejudge-id]");
    if (rejudge) {
      event.preventDefault();
      event.stopPropagation();
      rejudgeNope(rejudge.dataset.rejudgeId, rejudge.dataset.rejudgeValue);
      return;
    }

    const row = event.target.closest("[data-store-row]");
    if (row && !event.target.closest("a, button")) {
      openStoreDetail(row.dataset.storeRow);
    }
  });

  on("likeSearchInput", "input", (event) => {
    state.likeSearchQuery = event.target.value;
    saveState();
    renderMyLikes();
  });

  on("friendRequestList", "click", (event) => {
    const accept = event.target.closest(".accept-request");
    const reject = event.target.closest(".reject-request");
    if (accept) acceptFriendRequest(accept.dataset.requestId);
    if (reject) rejectFriendRequest(reject.dataset.requestId);
  });

  on("homeFriendDigest", "click", (event) => {
    const btn = event.target.closest(".home-friend-detail-button");
    if (!btn) return;
    renderFriendDetail(btn.dataset.friendId);
  });

  on("friendList", "click", (event) => {
    const btn = event.target.closest(".friend-detail-button");
    if (!btn) return;
    renderFriendDetail(btn.dataset.friendId);
  });

  on("friendListTab", "click", (event) => {
    const btn = event.target.closest(".friend-detail-button");
    if (!btn) return;
    renderFriendDetail(btn.dataset.friendId);
  });

  ["commonList", "friendOnlyList", "myOnlyList", "myLikesList", "myLikesFolderList"].forEach(id => {
    on(id, "click", (event) => {
      const btn = event.target.closest(".decide-button");
      if (!btn) return;
      decideStore(btn.dataset.storeId);
    });
  });

  initializeSwipeGestures();

  document.addEventListener("click", (event) => {
    const nope = event.target.closest("#nopeBtn");
    const like = event.target.closest("#likeBtn");
    const superLike = event.target.closest("#superLikeBtn");
    const undoBtn = event.target.closest("#undoBtn");

    if (nope) {
      event.preventDefault();
      answerCurrent("nope");
      return;
    }

    if (like) {
      event.preventDefault();
      answerCurrent("like");
      return;
    }

    if (superLike) {
      event.preventDefault();
      answerCurrent("superlike");
      return;
    }

    if (undoBtn) {
      event.preventDefault();
      undo();
      return;
    }
  }, true);
}

function boot() {
  registerServiceWorker();
  loadState();
  ensureAccountData();
  forceSingleAccount();
  applyAccountToLegacy();
  mergeCustomStores();
  if (state.nearbyStores?.length) setNearbyStatus(`周辺取得済み：${state.nearbyStores.length}件`);
  attachEvents();
  if ($("displayNameInput")) $("displayNameInput").value = state.displayName || "カイ";
  if ($("displayNameInputModal")) $("displayNameInputModal").value = state.displayName || "カイ";
  renderAccountSettings();
  renderHome();
}

boot();
