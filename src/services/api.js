import { useState, useEffect } from "react";

export const useFetch = (url) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);

  const fetchCharacters = async () => {
    try {
      setLoading(true);
      const response = await fetch(url);
      const data = await response.json();
      setData(
        data.results.map((item) => {
          return {
            name: item.name,
            birthYear: item.birth_year,
            skinColor: item.skin_color,
            eyeColor: item.eye_color,
            height: item.height,
            url: item.url,
          };
        })
      );
      setLoading(false);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchCharacters();
  }, []);

  return { loading, data };
};

export const BASE_URL = "https://swapi.dev/api/people";
