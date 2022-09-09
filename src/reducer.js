import { SET_LOADING, SET_CHARACTERS } from "./actions";

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
    default:
      throw new Error(`no matching ${action.type} action type`);
  }
};
export default reducer;
