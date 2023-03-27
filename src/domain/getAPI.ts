const BASE_API_DOMAIN = 'https://api.themoviedb.org';
const POPULAR_API_PATH = '3/movie/popular';
const SEARCH_API_PATH = '3/search/movie';

const getAPI = {
  popularMovie: (page: number) => {
    return `${BASE_API_DOMAIN}/${POPULAR_API_PATH}?api_key=${process.env.API_KEY}&language=ko-KR&page=${page}`;
  },
  searchMovie: (keyword: string, page: number) =>
    `${BASE_API_DOMAIN}/${SEARCH_API_PATH}?api_key=${process.env.API_KEY}&language=ko-KR&query=${keyword}&page=${page}`,

  detailMovie: (movieId: number) =>
    `https://api.themoviedb.org/3/movie/${movieId}?api_key=${process.env.API_KEY}&language=ko-KR`,
};

export default getAPI;
