import {getRandomAPI, getSearchAPI} from '@services/Services';

describe('Random API tests', () => {
  const random_url =
    'https://api.giphy.com/v1/stickers/random?api_key=dc6zaTOxFJmzC';
  const search_url = `https://api.giphy.com/v1/gifs/search?api_key=dc6zaTOxFJmzC&q=keyword&limit=9`;

  it('handles random api success case', async () => {
    global.fetch = jest.fn(url =>
      Promise.resolve({
        ok: true,
        json: () => Promise.resolve({random_url: url}),
      }),
    );

    const response = await getRandomAPI(random_url);
    expect(response.random_url).toEqual(random_url);
  });

  it('handles search api success case', async () => {
    global.fetch = jest.fn(url =>
      Promise.resolve({
        ok: true,
        json: () => Promise.resolve({search_url: url}),
      }),
    );

    const response = await getSearchAPI('keyword');
    expect(response.search_url).toEqual(search_url);
  });
});
