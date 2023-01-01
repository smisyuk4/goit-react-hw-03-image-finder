export const fetchImages = async (name, imgPerPage, numberPage) => {
  const BASE_URL = 'https://pixabay.com/api/';
  const API_KEY = '31327013-dff4de219bc981e4672d8ee09';
  const PAGINATION = `&per_page=${imgPerPage}&page=${numberPage}`;
  const url = `${BASE_URL}?key=${API_KEY}&q=${name}${PAGINATION}`;

  const response = await fetch(url);
  if (!response.ok) {
    throw new Error(response.status);
  }
  return await response.json();
};
