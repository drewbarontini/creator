const helpers = require('./helpers');

describe('helpers.filterArrayFor()', () => {
  test('Should filter the array for the correct object', () => {
    const actual = [
      { path: '/', title: 'Home' },
      { path: '/about', title: 'About' }
    ];
    const expected = { path: '/about', title: 'About' };

    expect(helpers.filterArrayFor(actual, 'path', '/about')).toEqual(expected);
  });
});

describe('helpers.pre()', () => {
  test('Should return a string from an object', () => {
    const actual = {};
    const expected = "{}";

    expect(helpers.pre(actual)).toEqual(expected);
  });
});
