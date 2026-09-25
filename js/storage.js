const STORAGE_KEY = "anime-lively-state-v1";

const DEFAULT_STATE = {
  watchlist: {},
  favorites: {},
  ratings: {},
  statuses: {},
  likedReviews: {},
  notInterested: {},
  preferences: {},
  diagnosis: null
};


export function loadState() {

  try {

    const raw =
      localStorage.getItem(STORAGE_KEY);

    if (!raw) {
      return structuredClone(DEFAULT_STATE);
    }


    const parsed =
      JSON.parse(raw);


    return {
      ...structuredClone(DEFAULT_STATE),
      ...parsed
    };


  } catch (error) {

    console.error(
      "Anime Lively state load error:",
      error
    );


    return structuredClone(
      DEFAULT_STATE
    );

  }

}


export function saveState(state) {

  try {

    localStorage.setItem(
      STORAGE_KEY,
      JSON.stringify(state)
    );


    return true;


  } catch (error) {

    console.error(
      "Anime Lively state save error:",
      error
    );


    return false;

  }

}


export function resetState() {

  localStorage.removeItem(
    STORAGE_KEY
  );

  window.location.reload();

}


export function updateState(updater) {

  const state =
    loadState();


  const nextState =
    updater(
      structuredClone(state)
    );


  saveState(
    nextState
  );


  return nextState;

}
