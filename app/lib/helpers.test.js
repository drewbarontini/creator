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
