const fetchCharacters = async (url, loading, state) => {
  try {
    loading(true);
    const response = await fetch(url);
    const data = await response.json();
    loading(false);
    state(data.results);
  } catch (error) {
    console.log(error);
  }
};

export { fetchCharacters };
