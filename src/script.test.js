const fetch = require('node-fetch');
const swapi = require('./script');

it('call swapi api to get people', () => {
  expect.assertions(1); // for asynchronous code, 1 means no. of expect to run
  return swapi.getPeople(fetch).then((data) => {
    expect(data.count).toEqual(82);
  });
});

it('call swapi api to get people from Promise', () => {
  expect.assertions(2);
  return swapi.getPeoplePromise(fetch).then((data) => {
    expect(data.count).toEqual(82);
    expect(data.results.length).toBeGreaterThan(5);
  });
});
