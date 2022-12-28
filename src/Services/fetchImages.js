export const fetchImages = (name, numberPage) => {
  const BASE_URL = 'https://pixabay.com/api/';
  const API_KEY = '31327013-dff4de219bc981e4672d8ee09';
  const FILTERS = '&image_type=photo&orientation=horizontal&safesearch=true';
  const PAGINATION = `&per_page=${12}&page=${numberPage}`;
  const url = `${BASE_URL}?key=${API_KEY}&q=${name}${FILTERS}${PAGINATION}`;

  return fetch(url).then(response => {
    if (!response.ok) {
      throw new Error(response.status);
    }
    return response.json();
  });
};
