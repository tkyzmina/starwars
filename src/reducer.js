import {
  SET_LOADING,
  SET_CHARACTERS,
  CHOOSE_CHARACTER,
  HANDLE_SEARCH,
  HANDLE_PAGE,
} from "./actions";

const reducer = (state, action) => {
  switch (action.type) {
    case SET_LOADING:
      return { ...state, isLoading: true };
    case SET_CHARACTERS:
      return {
        ...state,
        isLoading: false,
        characters: action.payload.characters,
        nbPages: action.payload.nbPages,
      };
    case CHOOSE_CHARACTER:
      return {
        ...state,
        character: action.payload,
        activeListItem: action.payload.id,
      };
    case HANDLE_SEARCH:
      return {
        ...state,
        query: action.payload,
        character: {},
        activeListItem: "",
      };
    case HANDLE_PAGE: {
      return {
        ...state,
        page: action.payload,
        character: {},
        activeListItem: "",
      };
    }
    default:
      throw new Error(`no matching ${action.type} action type`);
  }
};
export default reducer;
