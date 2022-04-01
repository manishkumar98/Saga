// get your own key from unsplash please 😇
const KEY = "?client_id=81y6Zf2wXe9Fxu4wUCu2RbyvR0ISiDqlUKjCkoltKfE";
const URL = `https://api.unsplash.com/photos/`;

const fetchImages = async (page) => {
  const response = await fetch(`${URL}${KEY}&per_page=3&page=${page}`);
  const data = await response.json();
  if (response.status >= 400) {
    throw new Error(data.errors);
  }
  return data;
};

const fetchImageStats = async (id) => {
  const response = await fetch(`${URL}/${id}/statistics${KEY}`);
  const data = await response.json();
  if (response.status >= 400) {
    throw new Error(data.errors);
  }
  return data;
};

export { fetchImages, fetchImageStats };
