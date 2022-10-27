import { charactersActions } from "./characters-slice";
import { characterMapper } from "../mappers/characterMapper";
import { getId } from "../services/utils";

export const fetchCharacters = (url) => {
    return async (dispatch) => {
      const fetchData = async () => {
        const response = await fetch(url);
  
        if (!response.ok) {
          throw new Error("Could not fetch cart data.");
        }
  
        dispatch(charactersActions.toggleLoading());
  
        const data = await response.json();
        return data;
      };
  
      try {
        const charactersData = await fetchData();
        const charactersArray = charactersData.results
          .map((item) => characterMapper(item))
          .map((item) => {
            return { ...item, id: getId(item.url) };
          });
        const nbPages = Math.ceil(charactersData.count / 10);
        dispatch(
            charactersActions.setCharacters({
            characters: charactersArray,
            nbPages: nbPages,          
          }),
          charactersActions.toggleLoading()
        );
      } catch (error) {
        console.log(error);
      }
    };
  };