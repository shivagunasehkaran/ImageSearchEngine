import {GET_URL} from '@services/Constants';

describe('Constants', () => {
  it('renders correctly with all random url values', async () => {
    expect(GET_URL.RANDOM_URL).toEqual(
      'https://api.giphy.com/v1/stickers/random?api_key=dc6zaTOxFJmzC',
    );
  });

  it('renders correctly with all serach url values', async () => {
    expect(GET_URL.SEARCH_URL).toEqual(
      'https://api.giphy.com/v1/gifs/search?api_key=dc6zaTOxFJmzC',
    );
  });
});
