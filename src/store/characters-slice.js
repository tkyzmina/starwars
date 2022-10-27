import { createSlice } from "@reduxjs/toolkit";

export const charactersSlice = createSlice({
  name: "characters",
  initialState: {
    isLoading: true,
    characters: [],
    character: {},
    query: "",
    nbPages: 0,
    page: 1,
    activeListItem: "",
  },
  reducers: {
    setCharacters(state, actions) {
      state.characters = actions.payload.characters;
      state.nbPages = actions.payload.nbPages;
      state.isLoading = actions.payload.isLoading;
    },
    setSelectedCharacter(state, actions) {
      state.character = actions.payload.character;
      state.activeListItem = actions.payload.character.id;
    },
    setSearchQuery(state, actions) {
      state.query = actions.payload.query;
      state.character = {};
      state.activeListItem = "";
      state.page = 1;
    },
    setPaginationPage(state, actions) {
      state.page = actions.payload.page;
      state.character = {};
      state.activeListItem = "";
    },
    toggleLoading(state) {
      state.isLoading = !state.isLoading;
    },
  },
});

export const charactersActions = charactersSlice.actions;
