export const getImgUrl = (type, id) => {
  return (id) => {
    return `${process.env.REACT_APP_IMG_URL}${type}/${id}.jpg`;
  };
};

export const getId = (url) => {
  const regexp = /(\d+)\//i;
  return url.match(regexp)[1];
};
