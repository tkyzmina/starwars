import { useState, useEffect } from "react";

const useFetch = (url) => {
  const [characters, setCharacters] = useState([]);
  const [loading, setLoading] = useState(false);

  const fetchCharacters = async () => {
    try {
      setLoading(true);
      const response = await fetch(url);
      const data = await response.json();
      setCharacters(data.results);
      setLoading(false);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchCharacters();
  }, [url]);

  return { loading, characters };
};

export {useFetch}