const setTitle = require('./title');

test('Should set the home page title', () => {
  const expected = 'Creator (Multi) - Multi-page Express Application';
  const actual = setTitle('/');

  expect(expected).toEqual(actual);
});
