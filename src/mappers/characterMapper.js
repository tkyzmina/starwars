export const characterMapper = (item) => {
  return {
    name: item.name,
    birthYear: item.birth_year,
    skinColor: item.skin_color,
    eyeColor: item.eye_color,
    height: item.height,
    url: item.url,
  };
};
