import { chatTypes } from "./chat-actions";

const initialState = {
  input: "",
  apiKey: "",
  loading: false,
  showResult: false,
  resultData: "",
  recentSearches: [],
};

const chatReducer = (state = initialState, action) => {
  switch (action.type) {
    case chatTypes.SET_INPUT:
      return { ...state, input: action.payload };

    case chatTypes.SET_API_KEY:
      return { ...state, apiKey: action.payload };

    case chatTypes.SET_SHOW_RESULT:
      return { ...state, showResult: action.payload };

    case chatTypes.SET_LOADING:
      return { ...state, loading: action.payload };

    case chatTypes.SET_RESULT_DATA:
      return { ...state, resultData: action.payload };
    case chatTypes.ADD_RECENT_SEARCH:
      return { ...state, recentSearches: [action.payload, ...state.recentSearches].slice(0, 5) };

    default:
      return state;
  }
};

export default chatReducer;