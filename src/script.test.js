const fetch = require('node-fetch');
const swapi = require('./script');

it('call swapi api to get people', () => {
  swapi.getPeoplePromise(fetch).then((data) => {
    expect(data.count).toEqual(87);
  });
});
