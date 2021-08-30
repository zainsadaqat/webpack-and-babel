const googleSearch = require('./index');

const dbMock = ['dog.com', 'cheesepuf.com', 'disney.com', 'dogspicture.com'];

describe('Group Togather : ', () => {
  it('Google Search ...', () => {
    expect(googleSearch('cheesepuf', dbMock)).toEqual(['cheesepuf.com']);
    expect(googleSearch('dog', dbMock)).toEqual(['dog.com', 'dogspicture.com']);
    expect(googleSearch('dg', dbMock)).toEqual([]);
  });

  it('work with undefined and null input', () => {
    expect(googleSearch(undefined, dbMock)).toEqual([]);
    expect(googleSearch(null, dbMock)).toEqual([]);
  });

  it('Does not return more than 3 matches', () => {
    expect(googleSearch('.com', dbMock).length).toBe(3);
  });
});
