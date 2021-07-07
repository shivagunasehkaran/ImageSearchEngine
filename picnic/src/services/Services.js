import {GET_URL} from './Constants';

export async function getRandomAPI() {
  const url = GET_URL.RANDOM_URL;
  return fetch(url)
    .then(response => response.json())
    .then(responseJson => {
      return responseJson.data;
    })
    .catch(err => {
      return Promise.reject(err);
    });
}

export async function getSearchAPI(keyword) {
  const url = `${GET_URL.SEARCH_URL}&q=${keyword}&limit=9`;
  return fetch(url)
    .then(response => response.json())
    .then(responseJson => {
      return responseJson.data;
    })
    .catch(err => {
      return Promise.reject(err);
    });
}
