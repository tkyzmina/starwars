import { useState, useEffect } from "react";
import { characterMapper } from "../mappers/characterMapper";

export const useFetch = (url) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);

  const fetchCharacters = async () => {
    try {
      setLoading(true);
      const response = await fetch(url);
      const data = await response.json();
      setData(data.results.map((item) => characterMapper(item)));
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
