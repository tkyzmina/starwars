export const getImgUrl = (type, id) => {
  return (id) => {
    return `https://starwars-visualguide.com/assets/img/${type}/${id}.jpg`;
  };
};

export const getId = (url) => {
  const regexp = /(\d+)\//i;
  return url.match(regexp)[1];
};
